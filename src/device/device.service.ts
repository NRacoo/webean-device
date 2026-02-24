import { Injectable, Logger } from "@nestjs/common";
import { LiveDetectionRecord, LiveSession, PaginatedResult } from "./interface/device";
import { BufferService } from "./service/buffer.service";
import { MonthlyService } from "./service/monthly.service";
import { SessionRepository } from "./repository/session.repository";
import { RecordRepository } from "./repository/record.repository";

@Injectable()
export class DeviceService{
    private readonly logger = new Logger(DeviceService.name);

    private live : LiveSession = {
        sessionId: null,
        totalBaik: 0,
        totalCacat: 0,
        startedAt: null,
    }

    constructor(
        private readonly bufferService : BufferService,
        private readonly monthlyService: MonthlyService,
        private readonly sessionRepo   : SessionRepository,
        private readonly recordRepo    : RecordRepository,
    ){}

    async StartSession() : Promise<void>{
        const session = await this.sessionRepo.create(new Date());

        this.live = {
            sessionId: session.id,
            totalBaik: 0,
            totalCacat: 0,
            startedAt: session.startedAt.toISOString(),
        };

        this.bufferService.start();
        this.logger.log(`Sesi baru dimulai. ID: ${session.id}`)
    };

    async stopSession(): Promise<void>{
        if(!this.live.sessionId) return;
        
        await this.bufferService.flushAndStop();

        await this.sessionRepo.closeSession(
            this.live.sessionId,
            this.live.totalBaik,
            this.live.totalCacat
        );

        this.logger.log(
            `Sesi selesai. ID: ${this.live.sessionId} | ` +
            `Baik: ${this.live.totalBaik} | Cacat: ${this.live.totalCacat}`
        );

        await this.monthlyService.recalculate(this.live.sessionId);

        this.live = { sessionId: null, totalBaik:0, totalCacat:0, startedAt:null}
    };

    recordDetection(baik: number, cacat:number) : LiveDetectionRecord{
        if(!this.live.startedAt){
            this.live.startedAt = new Date().toISOString();
        };

        this.live.totalBaik += baik;
        this.live.totalCacat += cacat;

        const record: LiveDetectionRecord = {
            baik, 
            cacat,
            totalBaik: this.live.totalBaik,
            totalCacat: this.live.totalCacat,
            timestamp: new Date().toISOString(),
        };

        if(this.live.sessionId){
            this.bufferService.add({
                sessionId: this.live.sessionId,
                baik,
                cacat,
                totalBaik: this.live.totalBaik,
                totalCacat: this.live.totalCacat,
                timestamp: new Date(),
            });
        };

        return record;
    };

    getLiveSession(){
        return { ...this.live };
    }

    getCurrentMonthSummary(){
        return this.monthlyService.getCurrentMonth();
    }

    getMonthlyHistory(limit = 12){
        return this.monthlyService.getHistory(limit);
    };

    getYearSummary(year:number){
        return this.monthlyService.getByYear(year);
    }

    async getSessions(page = 1, limit= 2): Promise<PaginatedResult<any>>{
        const [data, total] = await this.sessionRepo.findManyPaginated(page, limit);
        return { data, total, page, limit, totalPages: Math.ceil(total / limit)}
    };

    getSessionsRecord(sessionId: string, limit=100){
        return this.recordRepo.findBySession(sessionId, limit);
    }
}
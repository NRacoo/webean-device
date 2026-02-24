import { Injectable, Logger } from "@nestjs/common";
import { SessionRepository } from "../repository/session.repository";
import { MonthlyRepository } from "../repository/monthly.repository";


@Injectable()
export class MonthlyService{
    private readonly logger = new Logger(MonthlyService.name)

    constructor(
        private readonly sessionRepo: SessionRepository,
        private readonly monthlyRepo: MonthlyRepository,
    ){}

    async recalculate(sessionId: string) : Promise<void>{
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;

        const sessions = await this.sessionRepo.findCompleteByMonth(year, month);
        if(sessions.length === 0) return;

        const totalBaik = sessions.reduce((s, r) => s + r.totalBaik, 0);
        const totalCacat = sessions.reduce((s, r) => s + r.totalCacat, 0);
        const totalPanen = totalBaik + totalCacat
        const jumlahSesi = sessions.length;
        const avgBaikPerSesi = totalBaik / jumlahSesi;
        const avgCacatPerSesi = totalCacat / jumlahSesi;
        const persenBaik = totalPanen > 0 ? Math.round((totalBaik / totalPanen) * 1000) / 10 : 0;

        const summary = await this.monthlyRepo.upsert({
            year, month,
            totalBaik, totalCacat, totalPanen, 
            avgBaikPerSesi, avgCacatPerSesi,
            persenBaik, jumlahSesi,
        });

        await this.sessionRepo.linkToMonthSummary(sessionId, summary.id);

        this.logger.log(
            `Summary ${year}-${String(month).padStart(2, '0')}`,
            `PersenBaik: ${persenBaik}% | Sesi: ${jumlahSesi}`
        );
    }
    
    getCurrentMonth(){
        return this.monthlyRepo.findCurrentMonth()
    };

    getHistory(limit: number){
        return this.monthlyRepo.findHistory(limit);
    };
    getByYear(year: number){
        return this.monthlyRepo.findByYear(year)
    };
}
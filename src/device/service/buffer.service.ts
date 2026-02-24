import { Injectable, Logger, OnModuleDestroy } from "@nestjs/common";
import { Detection_records } from "src/generated/prisma";
import { RecordRepository } from "../repository/record.repository";


@Injectable()
export class BufferService implements OnModuleDestroy{
    private readonly logger = new Logger.log(BufferService.name);

    private buffer       : Omit<Detection_records, 'id'>[] =[];
    private flushInterval: NodeJS.Timeout | null = null;

    private readonly FLUSH_EVERY_MS = 5_0000;
    private readonly FLUSH_EVERY_ROWS = 100;

    constructor(private readonly recordRepo:RecordRepository){}

    onModuleDestroy() {
        this.stop();
    }

    start(){
        this.stop();

        this.flushInterval = setInterval(
            () => this.flush().catch(e => this.logger.error('Flush Interval error: ', e)),
            this.FLUSH_EVERY_MS
        );
    }

    stop(){
        if(this.flushInterval){
            clearInterval(this.flushInterval);
            this.flushInterval = null;
        }
    };

    add(record: Omit<Detection_records, 'id'>){
        this.buffer.push(record);
        if(this.buffer.length >= this.FLUSH_EVERY_MS){
            this.flush().catch(e => this.logger.error('Flush on limit error: ', e));
        };
    };

    async flushAndStop(){
        await this.flush();
        this.stop;
    }

    private async flush() : Promise<void>{
        if(this.buffer.length === 0 ) return;

        const toInsert = [...this.buffer];
        this.buffer = [];

        try {
            await this.recordRepo.bulkInsert(toInsert);
            this.logger.debug(`Flush ${toInsert.length} records ke database`)
        } catch (e) {
            this.logger.error(`Gagal flush: ${e.message}`)
            this.buffer = [...toInsert, ...this.buffer]
        }
    }
}

import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Detection_records } from "src/generated/prisma";


@Injectable()

export class RecordRepository{
    constructor(private readonly prisma:DatabaseService){}

    async bulkInsert(records: Omit<Detection_records, 'id'>[]){
        return this.prisma.detection_records.createMany({ data: records});
    };

    async findBySession(sessionId: string, limit:number){
        return this.prisma.detection_records.findMany(
            {
                where: { sessionId },
                orderBy: { timestamp: 'desc' },
                take: limit
            }
        );
    };
}
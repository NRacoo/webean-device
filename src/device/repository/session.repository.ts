import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class SessionRepository{
    constructor(private readonly prisma:DatabaseService){}

    async create(startedAt: Date){
        return this.prisma.detection_sessions.create(
            {
                data: {startedAt}
            }
        )
    };

    async closeSession(id: string, totalBaik:number, totalCacat:number){
        return this.prisma.detection_sessions.update(
            {
                where:{id},
                data:{ endedAt: new Date(), totalBaik, totalCacat}
            }
        );
    };

    async linkToMonthSummary(sessionId:string, monthSummaryId:string){
        return this.prisma.detection_sessions.update(
            {
                where:{ id:sessionId},
                data: { monthSummaryId }
            }
        );
    };

    async findCompleteByMonth(year:number, month:number) {
        return this.prisma.detection_sessions.findMany(
            {
                where: {
                    startedAt:
                    {
                        gte:new Date(year, month - 1, 1),
                        lt:new Date(year, month, 1)
                    },
                    endedAt:{ not: null },
                },
                select: { id: true, totalBaik:true, totalCacat:true}
            }
        );
    };

    async findManyPaginated(page: number, limit: number) {
        const skip = (page - 1) * limit;
        return Promise.all([
        this.prisma.detection_sessions.findMany({
            skip,
            take   : limit,
            orderBy: { startedAt: 'desc' },
            select : {
            id        : true,
            startedAt : true,
            endedAt   : true,
            totalBaik : true,
            totalCacat: true,
            },
        }),
        this.prisma.detection_sessions.count(),
        ]);
    }
}
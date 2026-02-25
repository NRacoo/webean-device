{/* 
import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { WebSocket } from "ws";
import { DeviceService } from "./device.service";
import { DeviceGateway } from "./gateway/device.gateway";



@Injectable()
export class DeviceWsClient implements OnModuleInit, OnModuleDestroy{
    private readonly logger = new Logger(DeviceWsClient.name);
    private readonly WS_URL = process.env.PYTHON_WS_URL ?? 'ws://localhost:8765';

    private ws: WebSocket | null = null;
    private reconnectTime: NodeJS.Timeout | null = null;
    private retryDelay : number = 3_000;
    private destroyed  : boolean = false;

    constructor(
        private readonly deviceService:DeviceService,
        private readonly deviceGateway:DeviceGateway,
    ){};

    onModuleInit() {
        this.connect();
    }

    onModuleDestroy() {
        this.destroyed = true, this.cleanup()
    }

    private connect(){
        if(this.destroyed) return;

        this.logger.log(`Menghubungkan ke ws_server.py: ${this.WS_URL}`);

        this.ws = new WebSocket(this.WS_URL)

        this.ws.on('open', () =>{
            this.retryDelay = 3_000;
            this.logger.log(`Terhubung ke ws_server.py`);
            this.send({type:'register', role:'dashboard'})
        });

        this.ws.on('message', (raw:Buffer) => {
            try {
                this.handleMessage(JSON.parse(raw.toString()))
            } catch (error) {
                this.logger.warn(`Pesan tidak valid: ${raw.toString().slice(0, 80)})}`)
            }
        });

        this.ws.on('error', (err) => {
            this.logger.error(`WS error: ${err.message}`);
        });

        this.ws.on('close', ()=>{
            this.logger.warn(`WS closed from ws_server.py. retry dalam ${this.retryDelay / 1000}`)
        });

    }

    private async handleMessage(msg: Record<string, any>){
        switch(msg.type){
            case 'registered':
                this.logger.log(`Terdaftar sebagai: ${msg.role}`);
                break;
            case 'detector_connected' :
                this.logger.log('Detector terhubung, mulai sesi baru');
                break;
            case 'detection': {
                const record = this.deviceService.recordDetection(
                    msg.baik ?? 0,
                    msg.cacat ?? 0
                );
                this.logger.log(
                    `Baik: ${record.baik} | Cacat: ${record.cacat} | ` +
                    `Total Baik: ${record.totalBaik} | Total Cacat: ${record.totalCacat}`
                );

                this.deviceGateway.broadcastDetection(record);
                break;
            }

            case 'detector_disconnected':
                this.logger.warn('Interrupted detector');
                await this.deviceGateway.onDetectorDisconnected();
                break;
            
            case 'pong':
                break;
            default:
                this.logger.debug(`Unknown message: ${msg.type}`)
        }
    }

    private send(data:object){
        if(this.ws?.readyState === WebSocket.OPEN){
            this.ws.send(JSON.stringify(data))
        }
    }

    private cleanup() {
        if(this.reconnectTime) clearTimeout(this.reconnectTime);
        this.ws?.close();
        this.ws = null;
    }
}
    */}
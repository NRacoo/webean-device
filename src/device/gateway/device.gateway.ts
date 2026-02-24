import { Logger } from "@nestjs/common";
import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { DeviceService } from "../device.service";


@WebSocketGateway({cors: { origin: '*' }, namespace: '/device'})
export class DeviceGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() server: Server;
    private readonly logger = new Logger(DeviceGateway.name)

    constructor(private readonly deviceService:DeviceService){}

    handleConnection(client: Socket) {
        client.join('dashboard');
        this.logger.log(`Frontend terhubung: ${client.id}`);

        client.emit('session_stats', this.deviceService.getLiveSession());
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Frontend terputus: ${client.id}`)
    };

    @SubscribeMessage('get_live')
    handleGetLive(@ConnectedSocket() client:Socket){
        client.emit('session_stats', this.deviceService.getLiveSession());
    };

    async onDetectorConnected(){
        await this.deviceService.StartSession();
        this.server.to('dashboard').emit('detector_status', {
            connected: true,
            timestamp: new Date().toISOString()
        });
    }

    async onDetectorDisconnected(){
        await this.deviceService.stopSession();
        this.server.to('dashboard').emit('detector_status',{
            connected:false,
            timestamp: new Date().toISOString()
        })
    }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceService } from './device/device.service';
import { DatabaseService } from './database/database.service';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DeviceModule],
  controllers: [AppController],
  providers: [AppService, DeviceService, DatabaseService],
})
export class AppModule {}

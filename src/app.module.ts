import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceService } from './device/device.service';
import { DatabaseService } from './database/database.service';
import { DeviceModule } from './device/device.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DeviceModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

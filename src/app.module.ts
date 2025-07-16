import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.config';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}

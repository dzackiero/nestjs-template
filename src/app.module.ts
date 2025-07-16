import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
      envFilePath: '.env',
    }),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

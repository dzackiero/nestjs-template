import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // generic modules
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validate,
      envFilePath: '.env',
    }),
    CommonModule,
    AuthModule,

    // application modules
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

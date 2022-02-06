import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({ secret: 'SECRET' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, UserService],
})
export class AuthModule {}

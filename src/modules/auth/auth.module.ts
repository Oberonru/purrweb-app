import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import config from 'src/configuration/config';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: config().secretKey.key,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ConfigService,
    UserService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

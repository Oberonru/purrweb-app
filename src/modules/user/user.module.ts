import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { CommentEntity } from '../comment/comment.entity';
import { CommentService } from '../comment/comment.service';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './role.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([CommentEntity]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CommentService,
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
  exports: [UserService],
})
export class UserModule {}

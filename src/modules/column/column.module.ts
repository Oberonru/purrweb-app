import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { ColumnEntity } from './column.entity';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity, UserEntity])],
  providers: [ColumnService],
  controllers: [ColumnController],
})
export class ColumnModule {}

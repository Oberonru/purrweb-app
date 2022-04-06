import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { ColumnEntity } from './column.entity';
import { ColumnDto } from './dto/column.dto';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(ColumnEntity)
    private readonly columnRepository: Repository<ColumnEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getColumns() {
    return this.columnRepository.find();
  }

  async addColumn(data: ColumnDto) {
    const { userId, name } = data;
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const column = new ColumnEntity();
    column.name = name;
    column.user = user;
    await this.columnRepository.save(column);
    return column;
  }
}

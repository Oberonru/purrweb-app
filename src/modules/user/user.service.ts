import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  all(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findUserById(id: number): Promise<UserEntity> {
    return this.repository.findOne(id);
  }

  findUserByEmail(email: string) {
    return this.repository.findOne(email);
  }

  clearDb() {
    return this.repository.clear();
  }
}

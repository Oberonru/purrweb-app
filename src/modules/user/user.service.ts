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

  addUser(data) {
    return this.repository.save(data);
  }

  async getUser(username: string): Promise<UserEntity | undefined> {
    return await this.repository.findOne({ username });
  }

  getAll() {
    return this.repository.find({ relations: ['comments', 'columns'] });
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return await this.repository.findOne(email);
  }

  clearDB() {
    return this.repository.clear();
  }
}

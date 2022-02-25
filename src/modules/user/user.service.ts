import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async getUser(username: string): Promise<UserEntity | undefined> {
    //return this.users.find((user) => user.username === username);
    return this.repository.findOne({ username });
  }

  addUser(username: string, email: string, password: string) {
    const user = this.repository.create();
    user.username = username;
    user.email = email;
    user.password = password;
    return this.repository.save(user);
  }

  getAll() {
    return this.repository.find();
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return await this.repository.findOne(email);
  }

  clearDB() {
    return this.repository.clear();
  }
}

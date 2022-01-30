import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import LoginDto from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>
  ) {}

  async register(data: LoginDto): Promise<UserEntity> {
    const { email, password } = data;
    const hashPassword = await bcrypt.hash(password, 10);
    return this.repository.save({
      email,
      password: hashPassword,
    });
  }

  async login(data: LoginDto): Promise<UserEntity> {
    const user = await this.repository.findOne(data.email);
    if (!user) {
      throw new BadRequestException('Email is not exist');
    }

    if (data.password !== user.password) {
      throw new BadRequestException('invalid password');
    }

    return user;
  }
}

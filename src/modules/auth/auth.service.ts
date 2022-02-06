import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import LoginDto from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async register(data: LoginDto): Promise<UserEntity> {
    const { email, password } = data;
    const hashPassword = await bcrypt.hash(password, 10);

    if (await this.userService.findUserByEmail(email)) {
      throw new BadRequestException('Email alredy exists');
    }

    return this.repository.save({
      email,
      password: hashPassword,
    });
  }

  async login(data: LoginDto) {
    const user = await this.repository.findOne(data.email);
    if (!user) {
      throw new BadRequestException('Email is not exist');
    }

    if (data.password !== user.password) {
      throw new BadRequestException('invalid password');
    }

    const jwt = await this.jwtService.signAsync(data);

    return jwt;
  }
}

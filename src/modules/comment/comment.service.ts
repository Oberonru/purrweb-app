import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { CommentEntity } from './comment.entity';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentsRepository: Repository<CommentEntity>,

    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async addComment(data: CommentDto) {
    const { userId, message } = data;
    const user = await this.usersRepository.findOne(userId);
    const comment = new CommentEntity();

    console.log(user, 'user');

    if (!user) {
      throw new NotFoundException('User not foud');
    }

    comment.message = message;
    comment.user = user;
    await this.commentsRepository.save(comment);

    return comment;
  }

  getComments() {
    return this.commentsRepository.find();
  }
}

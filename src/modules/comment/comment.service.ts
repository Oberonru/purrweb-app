import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly repository: Repository<CommentEntity>,
  ) {}

  all(): Promise<CommentEntity[]> {
    return this.repository.find();
  }

  add(data: CommentDto) {
    const { message, author, recipient } = data;
    return this.repository.save({ message });
  }
}

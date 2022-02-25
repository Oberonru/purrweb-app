import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller({ path: 'comment' })
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get('all')
  all(): Promise<CommentEntity[]> {
    return this.commentService.all();
  }

  @Post('add')
  add(@Body() data: CommentDto) {
    return this.commentService.add(data);
  }
}

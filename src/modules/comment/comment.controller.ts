import { Controller, Get } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

@Controller({ path: 'comment' })
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get('all')
  all(): Promise<CommentEntity[]> {
    return this.commentService.all();
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';

@ApiTags('')
@Controller({ path: 'comment' })
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments() {
    return this.commentService.getComments();
  }

  @Post()
  addComment(@Body() data) {
    return this.commentService.addComment(data);
  }
}

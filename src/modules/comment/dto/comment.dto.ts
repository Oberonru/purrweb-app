import { IsString } from 'class-validator';

export class CommentDto {
  @IsString()
  message: string;

  //author Id
  author: number;

  //recipient id
  recipient: number;
}

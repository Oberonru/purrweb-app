import { IsNumber, IsString } from 'class-validator';

export class CommentDto {
  @IsString()
  message: string;

  //author Id
  @IsNumber()
  author: number;

  //recipient id
  @IsNumber()
  recipient: number;

  @IsNumber()
  userId: number;
}

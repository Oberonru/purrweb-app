import { IsNumber, IsString } from 'class-validator';

export class ColumnDto {
  @IsNumber()
  userId: number;

  @IsString()
  name: string;
}

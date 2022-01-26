import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export default class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

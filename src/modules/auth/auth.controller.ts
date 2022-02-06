import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register user' })
  @Post('register')
  async register(@Body() data: LoginDto) {
    return this.authService.register(data);
  }

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
}

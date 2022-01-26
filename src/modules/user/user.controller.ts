import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Module')
@Controller({
  path: 'user'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  testHello() {
    return this.userService.test();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User Module')
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  all() {
    return this.userService.all();
  }
}

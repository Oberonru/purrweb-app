import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User Module')
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('adduser')
  addUser(@Body() data) {
    return this.userService.addUser(data.username, data.email, data.password);
  }

  @Get('getall')
  getAll() {
    return this.userService.getAll();
  }

  @Get('finduserbyemail')
  async findUserByEmail(@Body() email: string) {
    return await this.userService.findUserByEmail(email);
  }

  @Get('cleardb')
  clearDb() {
    return this.userService.clearDB();
  }
}

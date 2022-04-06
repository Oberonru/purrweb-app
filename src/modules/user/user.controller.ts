import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { Role } from './role.enum';
import { Roles } from './role/role.decorator';
import { RoleGuard } from './role.guard';

@ApiTags('User Module')
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() data) {
    return this.userService.addUser(data);
  }

  @Get('getUser')
  getUser(@Body() username: string) {
    return this.userService.getUser(username);
  }

  @Get('getAll')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  getAll() {
    return this.userService.getAll();
  }

  @Get('findUserByEmail')
  findUserByEmail(@Body() email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Get('cleardb')
  clearDb() {
    return this.userService.clearDB();
  }
}

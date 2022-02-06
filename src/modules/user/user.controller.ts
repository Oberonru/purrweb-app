import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@ApiTags('User Module')
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Find all user' })
  @Get('all')
  all(): Promise<UserEntity[]> {
    return this.userService.all();
  }

  @ApiOperation({ summary: 'Find user by id' })
  @Get('findUser')
  findUserById(@Param() id: number): Promise<UserEntity> {
    return this.userService.findUserById(id);
  }

  @ApiOperation({ summary: 'Find user by emeil' })
  @Get('findByEmail')
  findUserByEmail(@Param() email: string) {
    return this.userService.findUserByEmail(email);
  }

  @ApiOperation({ summary: 'Clear a data base' })
  @Get('clear')
  clearDb() {
    return this.userService.clearDb();
  }
}

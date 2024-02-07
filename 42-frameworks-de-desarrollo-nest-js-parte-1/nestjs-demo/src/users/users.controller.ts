import { Controller, Get, Post, Body, Put, Param, Delete, Query, HttpException, HttpStatus, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/:b')
  requestObject(@Request() req) {
    const { body, params, query } = req;
    return {
      body, params, query,
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const {
      first_name,
      last_name,
      email,
      password,
      avatar,
    } = createUserDto;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !avatar
    ) {
      throw new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('limit') lim, @Query('page') pag = 1) {
    console.log('limit', lim);
    console.log('page', pag);
    const users = this.usersService.findAll();
    return { status: 'success', users, limit: lim, page: pag };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (isNaN(+id)) {
      throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    }
    const user = this.usersService.findOne(+id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

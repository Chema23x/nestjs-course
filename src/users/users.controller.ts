import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller("/users")
@ApiTags('users')

export class UsersController {

    constructor(private userService:UsersService){}


    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() user:CreateUserDto){
        return this.userService.createUser(user);
    }
}

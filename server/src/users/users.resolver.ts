import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { createUserDto } from './dto/createUser.dto';
import { getUserDto } from './dto/getUser.dto';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async getUser(@Args() getUserArgs: getUserDto): Promise<User> {
    const user = await this.usersService.findUser(getUserArgs.id);
    if (user['success']) return user['message'];
    else throw new HttpException('Cannot find user', HttpStatus.BAD_REQUEST);
  }

  @Query()
  async getAllUsers(): Promise<User[]> {
    const users = await this.usersService.getUsers();
    if (users['success']) return users['message'];
    else throw new HttpException('Cannot get users', HttpStatus.BAD_REQUEST);
  }

  @Mutation()
  async addUser(@Args() createUserData: createUserDto): Promise<User> {
    const addedUser = await this.usersService.addUser(createUserData);
    if (addedUser['success']) return addedUser['message'];
    else throw new HttpException('Cannot add user', HttpStatus.BAD_REQUEST);
  }
}

import { Response } from 'express';
import { RegisterDto } from './dto/user.dto';
import { RegisterResponse } from './types/user.types';
import { UsersService } from './users.service';
import { Args, Context, Query, Mutation, Resolver } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entities';

@Resolver('User')
// @UseFilter
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ) {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill all the fields');
    }
    const user = await this.usersService.register(registerDto, context.res);
    return user;
  }

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }
}

// import { Controller } from '@nestjs/common';

// @Controller('user')
// export class UserController {}
// src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: any) {
    return this.userService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: any) {
    return this.userService.login(body.email, body.password);
  }
}

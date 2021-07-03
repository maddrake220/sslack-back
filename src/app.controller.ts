import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user') // GET /abc/user
  getUser(): string {
    return this.appService.getUser();
  }

  @Post('user') // POST /abc/user
  postUser(): string {
    return this.appService.postUser();
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}

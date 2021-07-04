import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUesrs(@Req() req) {
    return req.user;
  }
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    // Dto : Data Transfer Object 데이터 전달 객체
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }
  @Post('login') // post/users/login
  logIn() {}
  @Post('logout') // post/users/logout
  logOut(@Req() req, @Res() res) {
    // 컨트롤러에서 @Req() req, @Res() res 와 같이 사용하면 의존성이 높아지고
    // 재사용 성이 떨어지지만 logout 같은 기능 구현할때는 어쩔 수 없이 사용해야 한다.
    req.logOut();
    res.clearCookie('connect.sid', {
      httpOnly: true,
    });
    res.send('Ok');
  }
}

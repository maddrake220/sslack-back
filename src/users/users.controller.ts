import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    type: UserDto,
  })
  @ApiOperation({ summary: '내 정보 조회' }) // Swagger Api 주석
  @Get()
  getUsers(@User() user) {
    // Custom Decorator
    return user;
    // res.locals.jwt
  }
  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    // Dto : Data Transfer Object 데이터 전달 객체
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }
  @ApiOkResponse({
    // swagger Response 성공 문구
    description: '성공',
    type: UserDto,
  })
  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login') // post/users/login
  logIn(@User() user) {
    return user;
  }
  @ApiOperation({ summary: '로그아웃' })
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

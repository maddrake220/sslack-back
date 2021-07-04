import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query('perPage') perPage, @Query('page') page, @Param() param) {
    console.log('perPage', perPage, 'page', page);
    // getChat(@Query() query) : 모든 data 가져오기
    console.log(param.id, param.url);
    // @Params : :id, :url 라우트 파라미터 가져오기
  }
  @Post(':id/chats')
  postChat(@Body() body) {}
}

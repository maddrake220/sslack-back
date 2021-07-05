import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 Url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
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

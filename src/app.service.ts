import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';

// controller와 service 분리하는 이유
// controller : res, req 처리
// service : res, req에 대해서는 모른다. 비지니스 로직만 구현
// 해당 로직만 돌려주고 다시 컨트롤러에 반환
// 재사용성 증가, 테스팅(jest.mock() 으로 일일히 안해줘도 되고 서비스 함수만 테스팅 가능) 할때 유리함
@Injectable()
export class AppService {
  getUser(): string {
    return 'Hello World!';
  }
  postUser(): string {
    return 'Hello World~';
  }

  getHello(): string {
    return process.env.SECRET;
  }
}

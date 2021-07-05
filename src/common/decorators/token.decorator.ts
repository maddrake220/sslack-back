import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // ExcutionContext : 실행컨텍스트 : Nest를 할 때
    // 동시에 한서버에서 rtc, websocket, http 실행할 수있어서
    // 이 모두를 하나의 실행컨텍스트에서 관리를 할 수 있다.

    const response = ctx.switchToHttp().getResponse(); // http response 가저와라
    return response.locals.jwt;
  },
);

// @Token() token

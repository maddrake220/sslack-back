import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러로 가기 전 조작해야 하는 부분
    return next
      .handle()
      .pipe(
        map((data /* 컨트롤러에서 return 해주는 데이터 */) =>
          data === undefined ? null : data,
        ),
      );
    // 컨트롤러로 간 후 조작해야 하는 부분
  }
}

// A->B->C->D

// A->C->D

// A->E->F->D->G

// Z->A->X->D

// 공통점 : A가 실행되고 끝으로 D가 실행됨, A와 D라는 공통의 미들웨어를 가지고 있음.

// 보통 라우터 진행방식은 가로로 진행되는데

// 위와 같은 경우 Interceptor를 통해 (A, D) 중복을 제거 할 수있다.

// 컨트롤러 시작 전과 시작 후, 컨트롤러 다음에 어떤 동작을 할지, 이런 경우에 사용

import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  // 중복되는 부분은 상속받아서 할 수 있다.
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}

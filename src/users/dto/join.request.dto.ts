import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'jwchoi4118@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: 'maddrake220',
    description: '닉네임',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: '1234qwer11@@',
    description: '패스워드',
    required: true,
  })
  public password: string;
}

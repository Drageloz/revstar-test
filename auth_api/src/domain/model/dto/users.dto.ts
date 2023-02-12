import { ApiProperty } from '@nestjs/swagger';

export class UsersDTO {
  @ApiProperty({
    description: 'The name of User',
    example: 'Drageloz',
  })
  name?: string;

  @ApiProperty({
    description: 'The email, remember this field is unique',
    example: 'drageloz@mail.com',
  })
  email: string;

  @ApiProperty({
    description: 'password for auth',
    example: 'password',
  })
  password: string;

  @ApiProperty({
    description: 'The role for authorization',
    example: 'user',
  })
  role: string;
}

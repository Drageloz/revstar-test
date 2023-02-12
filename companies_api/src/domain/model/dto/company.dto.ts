import { ApiProperty } from '@nestjs/swagger';

export class CompanyDTO {
  @ApiProperty({
    description: 'The NIT pf company',
    example: '123412341234',
  })
  nit: string;

  @ApiProperty({
    description: 'The Address of Company',
    example: 'cll 22',
  })
  address: string;

  @ApiProperty({
    description: 'The name Of Company',
    example: 'Revstar',
  })
  name: string;

  @ApiProperty({
    description: 'The phone of Company',
    example: '13241234',
  })
  phone: number;
}

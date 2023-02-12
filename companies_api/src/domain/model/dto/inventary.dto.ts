import { ApiProperty } from '@nestjs/swagger';

export class InventaryDTO {
  @ApiProperty({
    description: 'Description of Inventary Item',
    example: 'Product to brush your theet',
  })
  description: string;

  @ApiProperty({
    description: 'Stock for the product',
    example: '13',
  })
  stock: number;

  @ApiProperty({
    description: 'Name of the product',
    example: 'brush',
  })
  name: string;

  @ApiProperty({
    description: 'Price of Item',
    example: '3500',
  })
  price: number;

  @ApiProperty({
    description: 'The NIT pf company',
    example: '1234123',
  })
  companyNit?: number;
}

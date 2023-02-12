import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { InventaryDTO } from 'src/domain/model/dto/inventary.dto';
import { InventaryService } from 'src/domain/service/inventary.service';

@Controller('api/inventary')
export class InventaryController {
  constructor(private readonly inventaryService: InventaryService) {}

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return await this.inventaryService.delete(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async save(@Body() inventary: InventaryDTO) {
    return await this.inventaryService.save(inventary);
  }
}

import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { InventaryDTO } from 'src/domain/model/dto/inventary.dto';
import { InventaryService } from 'src/domain/service/inventary.service';

@Controller('api/inventary')
@ApiTags('Inventary')
export class InventaryController {
  constructor(private readonly inventaryService: InventaryService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Inventary Item' })
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    return await this.inventaryService.delete(id);
  }

  @Post()
  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  async save(@Body() inventary: InventaryDTO) {
    return await this.inventaryService.save(inventary);
  }
}

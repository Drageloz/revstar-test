import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { CompanyDTO } from 'src/domain/model/dto/company.dto';
import { CompanyService } from 'src/domain/service/company.service';

@Controller('api/companies')
@ApiTags('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Get All Companies' })
  @UseGuards(JwtAuthGuard)
  async auth() {
    return await this.companyService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Save Company' })
  @UseGuards(JwtAuthGuard)
  async save(@Body() company: CompanyDTO) {
    return await this.companyService.save(company);
  }

  @Delete(':nit')
  @ApiOperation({ summary: 'Delete Company' })
  @UseGuards(JwtAuthGuard)
  async delete(@Param('nit') nit: string) {
    return await this.companyService.delete(nit);
  }

  @Get(':nit')
  @ApiOperation({ summary: 'Find Company By NIT' })
  @UseGuards(JwtAuthGuard)
  async findByNit(@Param('nit') nit: string) {
    return await this.companyService.findByNit(nit);
  }
}

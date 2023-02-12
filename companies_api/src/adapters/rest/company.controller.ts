import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/domain/guard/jwt-auth.guard';
import { CompanyDTO } from 'src/domain/model/dto/company.dto';
import { CompanyService } from 'src/domain/service/company.service';

@Controller('api/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async auth() {
    return await this.companyService.getAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async save(@Body() company: CompanyDTO) {
    return await this.companyService.save(company);
  }

  @Delete(':nit')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('nit') nit: string) {
    return await this.companyService.delete(nit);
  }

  @Get(':nit')
  @UseGuards(JwtAuthGuard)
  async findByNit(@Param('nit') nit: string) {
    return await this.companyService.findByNit(nit);
  }
}

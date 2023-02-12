import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Mapper } from 'src/utils/mapper';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { CompanyDTO } from '../model/dto/company.dto';
import { Company } from '../model/entity/company.entity';
import { CompanyInterface } from '../ports/company.interface';

@Injectable()
export class CompanyService implements CompanyInterface {
  constructor(private jwtService: JwtService) {}

  async checkConnection() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  }

  async getAll() {
    await this.checkConnection();
    const repository: Repository<Company> =
      AppDataSource.getRepository(Company);
    try {
      const companies: Company[] = await repository.find({
        relations: {
          inventary: true,
        },
      });
      return { companies };
    } catch {
      return { status: 400, body: 'Error en busqueda de compañías' };
    }
  }

  async save(company: CompanyDTO) {
    await this.checkConnection();
    company = Mapper.toCompany(company);
    const repository: Repository<Company> =
      AppDataSource.getRepository(Company);
    try {
      await repository.save(company);
      return { status: 201 };
    } catch {
      return { status: 400, body: 'Error en busqueda de compañías' };
    }
  }

  async delete(nit: string) {
    await this.checkConnection();
    const repository: Repository<Company> =
      AppDataSource.getRepository(Company);
    try {
      await repository.delete({ nit: nit });
      return { status: 204 };
    } catch {
      return { status: 400, body: 'Error en busqueda de compañías' };
    }
  }

  async findByNit(nit: string) {
    await this.checkConnection();
    const repository: Repository<Company> =
      AppDataSource.getRepository(Company);
    try {
      const company = await repository.findOne({
        where: {
          nit: nit,
        },
        relations: {
          inventary: true,
        },
      });
      return { company };
    } catch {
      return { status: 400, body: 'Error en busqueda de compañías' };
    }
  }
}

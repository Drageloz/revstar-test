import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Mapper } from 'src/utils/mapper';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import { InventaryDTO } from '../model/dto/inventary.dto';
import { Inventary } from '../model/entity/inventary.entity';
import { InventaryInterface } from '../ports/inventary.interface';

@Injectable()
export class InventaryService implements InventaryInterface {
  constructor(private jwtService: JwtService) {}

  async checkConnection() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  }

  async delete(id: string) {
    await this.checkConnection();
    const repository: Repository<Inventary> =
      AppDataSource.getRepository(Inventary);
    try {
      await repository.delete({ id: id });
      return { status: 204 };
    } catch {
      return { status: 400, body: 'Error en eliminación de inventario' };
    }
  }

  async save(inventary: InventaryDTO) {
    await this.checkConnection();
    inventary = Mapper.toInventary(inventary);
    const repository: Repository<Inventary> =
      AppDataSource.getRepository(Inventary);
    try {
      await repository.save(inventary);
      return { status: 201 };
    } catch {
      return { status: 400, body: 'Error en guardado de inventario' };
    }
  }
}

import { instanceToPlain, plainToClass } from 'class-transformer';
import { CompanyDTO } from 'src/domain/model/dto/company.dto';
import { InventaryDTO } from 'src/domain/model/dto/inventary.dto';
import { Company } from 'src/domain/model/entity/company.entity';
import { Inventary } from 'src/domain/model/entity/inventary.entity';

export class Mapper {
  static toCompany(companyDto: CompanyDTO): Company {
    const data = instanceToPlain(companyDto);
    return plainToClass(Company, data);
  }

  static toInventary(inventaryDTO: InventaryDTO): Inventary {
    const data = instanceToPlain(inventaryDTO);
    return plainToClass(Inventary, data);
  }
}

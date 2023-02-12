import { Company } from 'src/domain/model/entity/company.entity';
import { Inventary } from 'src/domain/model/entity/inventary.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: 'securitynet.database.windows.net',
  port: 1433,
  username: 'sn_admin',
  password: '1230i#SoSOln',
  database: 'revstar',
  synchronize: true,
  logging: true,
  entities: [Company, Inventary],
  subscribers: [],
  migrations: [],
});

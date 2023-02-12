import { Users } from 'src/domain/model/entity/users.entity';
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
  entities: [Users],
  subscribers: [],
  migrations: [],
});

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';

@Entity('inventary')
export class Inventary extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  stock: string;

  @Column()
  name: string;

  @Column()
  price: string;

  @ManyToOne(() => Company, (company) => company.inventary, {
    nullable: true,
  })
  company: Company;
}

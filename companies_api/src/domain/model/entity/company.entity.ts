import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Inventary } from './inventary.entity';

@Entity('company')
export class Company extends BaseEntity {
  @PrimaryColumn()
  nit: string;

  @Column()
  address: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @OneToMany(() => Inventary, (inventary) => inventary.company, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn()
  inventary: Inventary;
}

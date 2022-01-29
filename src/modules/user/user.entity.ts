import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  password: string;
}

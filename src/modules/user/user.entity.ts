import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  /* @PrimaryGeneratedColumn()
  id: number; */

  @Column()
  email: string;

  @Column()
  password: string;

  @PrimaryGeneratedColumn()
  id: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: number;

  @Column()
  recipient: number;

  @Column()
  message: string;
}

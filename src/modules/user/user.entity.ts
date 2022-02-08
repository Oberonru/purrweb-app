import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity()
export class UserEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CommentEntity, (comment) => comment.userEntity)
  comments: CommentEntity[];
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ColumnEntity } from '../column/column.entity';
import { CommentEntity } from '../comment/comment.entity';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => ColumnEntity, (column) => column.user)
  columns: CommentEntity[];
  /* 
  @OneToMany(() => CommentEntity, (comment) => comment.recipient)
  comments: CommentEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  commented: CommentEntity[]; */
}

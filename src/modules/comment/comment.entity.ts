import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  userEntity: UserEntity;
}

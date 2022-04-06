import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;
  /*  @ManyToOne(() => UserEntity, (user) => user.id)
  author: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  recipient: number;
 */
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity("USER")
export class User {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Column({type:'varchar', nullable:false})
  name!: string;
  
  @Column({type:'varchar', nullable:false})
  email!: string;

  @Column({type:'varchar', nullable:false})
  uid!: string;

  @Column({type:'varchar', nullable:false})
  pwd!: string;

  @Column({type:'varchar', nullable:false})
  nickname!: string;

  @Column({type:'varchar', nullable:false})
  phone!: string;

  @Column({type:'varchar', nullable:false})
  address!: string;

  @Column({type:'date', nullable:false})
  birth!: Date;

  @Column({type:'varchar', nullable:true})
  banknum?: string;

  @Column({type:'varchar', nullable:true})
  bank?: string;

  @Column({type:'int', nullable:true})
  grade?: number;

}

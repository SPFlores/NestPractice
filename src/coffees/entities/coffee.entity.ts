import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from './flavor.entity'

// sql table === 'coffee' or Entity('coffees') if you want custom
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn() // makes id primary key, and auto increments it in table
  id: number;

  @Column() // required by default since no { nullable: true }
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @Column('json', { nullable: true }) // store arrays as json, make column optional w/ { nullable: true }
  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees,
    { cascade: true })
  flavors: Flavor[];
}

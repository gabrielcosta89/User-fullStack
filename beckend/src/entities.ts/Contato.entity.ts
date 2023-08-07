import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { Client } from "./Cliente.entity";

@Entity("contact")
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  createdAt: Date;

  // Many-to-One relationship with the Client entity
  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}

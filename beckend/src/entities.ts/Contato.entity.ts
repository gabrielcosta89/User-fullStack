import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { Cliente } from "./Cliente.entity";

@Entity("Contato")
export class Contato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  dataDeRegistro: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.contatos)
  cliente: Cliente;
}

export default Contato
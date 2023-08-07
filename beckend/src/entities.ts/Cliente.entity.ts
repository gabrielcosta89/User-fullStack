import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import {Contato} from "./Contato.entity";

@Entity("Cliente")
export class Cliente {
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

  @OneToMany(() => Contato, (contato) => contato.cliente, {
    cascade: true,
  })
  contatos: Contato[];
}

export default Cliente
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Contact } from "./Contato.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column()
  password: string;

  // BeforeInsert and BeforeUpdate hooks to hash the password before saving
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    // Check if the password is already hashed to avoid rehashing
    const isHashed = getRounds(this.password);
    if (!isHashed) {
      // Hash the password with bcryptjs and a cost factor of 10
      this.password = hashSync(this.password, 10);
    }
  }

  @CreateDateColumn()
  createdAt: Date;
  
  @OneToMany(() => Contact, (contact) => contact.client, {
    cascade: true,
  })
  contacts: Contact[];
}

export default Client;

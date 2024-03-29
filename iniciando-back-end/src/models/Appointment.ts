import { 
    Column, 
    PrimaryGeneratedColumn, 
    Entity, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
    JoinColumn,
} from 'typeorm';

/*
    Utilizando o Decorator "@", ele funciona como se fosse uma função.
    Ele pega a função Entity e passa a classe como um parametro.
    Toda vez que nossa model Appointment for salva, ela será salva na tabela.
    Graças a Entity, o constructor é criado de forma automatica, 
    então n é necessário.
*/

import User from './User';

@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    provider_id: string;
    
    @ManyToOne(() => User) //Função que retorna qual model deve ser utilizada quando for chamada.
    @JoinColumn({name: 'provider_id'}) //Coluna que vai identificar o prestador desse serviço.
    provider: User;

    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Appointment;
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('contacts')
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('longtext')
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}

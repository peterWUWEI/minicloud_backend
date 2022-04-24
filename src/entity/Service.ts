import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('services')
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service_title: string;

    @Column('longtext')
    service_content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}

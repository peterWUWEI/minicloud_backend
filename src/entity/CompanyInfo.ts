import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('company_info')
export class CompanyInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string; 

    @Column('text')
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}
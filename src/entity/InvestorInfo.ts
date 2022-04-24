import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('investor_info')
export class InvestorInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pdf_title: string; 

    @Column()
    pdf_file_url: string;

    @Column('longtext')
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}
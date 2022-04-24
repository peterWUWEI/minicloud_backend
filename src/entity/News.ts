import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('news')
export class News {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    news_title: string; 

    @Column('longtext')
    news_content: string;

    @Column()
    news_date: Date;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}
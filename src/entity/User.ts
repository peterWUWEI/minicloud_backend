import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string; 

    @Column()
    password: string;

    @Column()
    is_super_user: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: string;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: string;
}

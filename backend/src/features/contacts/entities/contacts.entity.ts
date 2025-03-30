import { randomUUID } from "node:crypto"
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    number: string

    @Column()
    address: string

    @Column()
    latitude: string

    @Column()
    longitude: string

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date

    @BeforeInsert()
    generatedId() {
        if (this.id) { 
            return 
        }
        this.id = randomUUID()
    }
}
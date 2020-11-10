import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("orphanages")
class Orphanages {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column("decimal")
    latitude: number;

    @Column("decimal")
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column("boolean")
    open_on_weekends: boolean;

    @Column()
    opening_hours: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Orphanages;

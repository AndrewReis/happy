import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";

import Image from "./Image";

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

    @OneToMany(() => Image, (image) => image.orphanage, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "orphanage_id" })
    image: Image[];
}

export default Orphanages;

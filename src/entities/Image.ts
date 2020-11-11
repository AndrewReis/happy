import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

import Orphanages from "./Orphanages";

@Entity("images")
class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Orphanages, (orphanage) => orphanage.image)
    @JoinColumn({ name: "orphanage_id" })
    orphanage: Orphanages;
}

export default Image;

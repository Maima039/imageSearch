import {Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Length} from "class-validator";


@Entity()
@Unique(['id'])

export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    index: number;

    @Column()
    // @Length(1,200)
    des: string | null;

    @Column()
    @Length(1,200)
    url:string

}

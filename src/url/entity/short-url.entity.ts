import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShortUrl {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    original_url: string;

    @Column()
    short_url: string;
}

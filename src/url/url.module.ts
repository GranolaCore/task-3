import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortUrl } from './entity/short-url.entity';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { DataSource } from 'typeorm';
import { UrlRepository } from './url.repository';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'short-url',
            entities: [ShortUrl],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([ShortUrl]),
    ],
    controllers: [UrlController],
    providers: [
        UrlService,
        {
            provide: UrlRepository,
            useFactory: (dataSource: DataSource) => {
                return new UrlRepository(dataSource);
            },
            inject: [DataSource],
        },
    ],
})
export class UrlModule {}

import { DataSource, Repository } from 'typeorm';
import { CreateShortUrlDTO } from './dto/urls.dto';
import { ShortUrl } from './entity/short-url.entity';

export class UrlRepository extends Repository<ShortUrl> {
    constructor(private dataSource: DataSource) {
        super(ShortUrl, dataSource.createEntityManager());
    }

    async setShortUrl(createShortUrl: CreateShortUrlDTO): Promise<ShortUrl> {
        const { original_url, short_url } = createShortUrl;

        const shorter = this.create({ original_url, short_url });
        await this.save(shorter);

        return shorter;
    }

    async getOriginalUrl(short_url: string, res) {
        const original_url = await this.findOne({ where: { short_url } });

        if (original_url) {
            res.redirect(original_url.original_url); 
        } else {
            res.status(404).json({ error: 'URL not found' }); 
        }
    }
}

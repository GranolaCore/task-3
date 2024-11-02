import { Injectable } from '@nestjs/common';
import { CreateShortUrlDTO } from './dto/urls.dto';
import { ShortUrl } from './entity/short-url.entity';
import { UrlRepository } from './url.repository';

@Injectable()
export class UrlService {
    constructor(private urlRepository: UrlRepository) {}

    setShortUrl(createShortUrl: CreateShortUrlDTO): Promise<ShortUrl> {
        return this.urlRepository.setShortUrl(createShortUrl);
    }
    getOriginalUrl(shortUrl: string, res) {
        return this.urlRepository.getOriginalUrl(shortUrl, res);
    }
}

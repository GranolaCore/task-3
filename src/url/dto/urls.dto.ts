import { IsUrl } from 'class-validator';

export class CreateShortUrlDTO {
    @IsUrl({
        protocols: ['http', 'https'],
        require_tld: true,
        require_protocol: true,
    })
    original_url: string;

    short_url: string;
}

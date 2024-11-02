import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateShortUrlDTO } from './dto/urls.dto';
import { Response } from 'express';
import { ShortUrl } from './entity/short-url.entity';

@Controller('api')
export class UrlController {
    constructor(private appService: UrlService) {}

    @Post('/shorturl')
    @UsePipes(
        new ValidationPipe({ forbidNonWhitelisted: true })
    )
    setShortUrl(@Body() createShortUrl: CreateShortUrlDTO): Promise<ShortUrl> {
        return this.appService.setShortUrl(createShortUrl);
    }

    @Get('shorturl/:shorturl')
    getOriginalUrl(
        @Param('shorturl') shortUrl: string,
        @Res({ passthrough: true }) res: Response
    ) {
        return this.appService.getOriginalUrl(shortUrl, res);
    }
}

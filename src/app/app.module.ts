import { Module } from '@nestjs/common';
import { UrlModule } from 'src/url/url.module';

@Module({
    imports: [UrlModule],
})
export class AppModule {}

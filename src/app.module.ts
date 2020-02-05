import {Module} from '@nestjs/common';
import {ArticleModule} from './article/article.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {ConfigModule} from './config/config.module';
import {ConfigService} from './config/config.service';

@Module({
    imports: [
        ConfigModule,
        ArticleModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client/dist/client'),
        }),
    ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';

@Module({
  imports: [
      ArticleModule,
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'client/dist/client'),
      }),
  ],
})
export class AppModule {}

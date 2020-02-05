import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import {ConfigService} from './config/config.service';

const configs = new ConfigService('.env');
const APPLICATION_PORT = configs.get('PORT', 3000);

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('/api');
  await app.listen(APPLICATION_PORT);
}
bootstrap();

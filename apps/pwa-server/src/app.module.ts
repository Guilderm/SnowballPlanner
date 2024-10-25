// apps/pwa-server/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [
    // Global Config Module to load environment variables from .env in the monorepo root
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'], // Adjust path if necessary
    }),

    // Throttler Module for rate limiting, configured using environment variables
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ttl: parseInt(configService.get<string>('RATE_LIMIT_TTL') || '60', 10), // Time-to-live in seconds
        limit: parseInt(
          configService.get<string>('RATE_LIMIT_LIMIT') || '10',
          10,
        ), // Max requests within TTL
      }),
    }),

    // Newsletter Module for handling the newsletter subscription functionality
    NewsletterModule,
  ],
  controllers: [], // No global controllers needed here
  providers: [], // No global providers needed here
})
export class AppModule {}

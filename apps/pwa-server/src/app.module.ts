import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [
    // Global Config Module to load environment variables from .env in the monorepo root
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'], // Adjust path as needed
    }),

    // HttpModule for making HTTP requests (e.g., to Mailchimp)
    HttpModule,

    // Newsletter Module for handling the newsletter subscription functionality
    NewsletterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

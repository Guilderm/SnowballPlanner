// apps/pwa-server/src/newsletter/newsletter.module.ts

import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [NewsletterService],
  controllers: [NewsletterController],
})
export class NewsletterModule {}

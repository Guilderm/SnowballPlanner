// apps/pwa-server/src/newsletter/newsletter.controller.ts

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { NewsletterService } from './newsletter.service.js'
import { SubscribeDto } from './dto/subscribe.dto.js'

@Controller('api/newsletter_subscription')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async subscribe(
    @Body() subscribeDto: SubscribeDto
  ): Promise<{ message: string }> {
    await this.newsletterService.subscribe(subscribeDto.email_address)
    return { message: 'Successfully subscribed' }
  }
}

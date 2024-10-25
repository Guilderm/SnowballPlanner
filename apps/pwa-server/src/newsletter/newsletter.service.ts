// apps\pwa-server\src\newsletter\newsletter.service.ts
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NewsletterService {
  private readonly logger = new Logger(NewsletterService.name);

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async subscribe(email: string): Promise<void> {
    const mailchimpApiKey = this.configService.get<string>('MAILCHIMP_API_KEY');
    const mailchimpAudienceId = this.configService.get<string>(
      'MAILCHIMP_AUDIENCE_ID',
    );

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      this.logger.error('MailChimp configuration is missing');
      throw new InternalServerErrorException(
        'MailChimp configuration is missing',
      );
    }

    const dc = mailchimpApiKey.split('-')[1]; // Extract data center from API key

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const auth = {
      username: 'anystring', // Mailchimp requires any string as username
      password: mailchimpApiKey,
    };

    try {
      const response$ = this.httpService.post(url, data, { auth });
      const response = await firstValueFrom(response$);
      this.logger.log(`MailChimp Response: ${JSON.stringify(response.data)}`);
    } catch (error: any) {
      this.logger.error(
        `MailChimp error: ${JSON.stringify(error.response?.data || error.message)}`,
      );
      throw new InternalServerErrorException('Failed to subscribe');
    }
  }
}

import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import axios from "axios"; // Import axios for type-checking

@Injectable()
export class NewsletterService {
  private readonly logger = new Logger(NewsletterService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async subscribe(email: string): Promise<void> {
    const mailchimpApiKey = this.configService.get<string>("MAILCHIMP_API_KEY");
    const mailchimpAudienceId = this.configService.get<string>(
      "MAILCHIMP_AUDIENCE_ID",
    );

    if (!mailchimpApiKey || !mailchimpAudienceId) {
      this.logger.error("MailChimp configuration is missing");
      throw new InternalServerErrorException(
        "MailChimp configuration is missing",
      );
    }

    const dc = mailchimpApiKey.split("-")[1];
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const auth = {
      username: "anystring", // Mailchimp requires any string as username
      password: mailchimpApiKey,
    };

    try {
      const response$ = this.httpService.post(url, data, { auth });
      const response = await firstValueFrom(response$);
      this.logger.log(`MailChimp Response: ${JSON.stringify(response.data)}`);
    } catch (error: unknown) {
      // Check if the error is an Axios error
      if (axios.isAxiosError(error)) {
        this.logger.error(
          `MailChimp error: ${JSON.stringify(error.response?.data || error.message)}`,
        );
      } else {
        this.logger.error(`MailChimp error: ${error}`);
      }
      throw new InternalServerErrorException("Failed to subscribe");
    }
  }
}

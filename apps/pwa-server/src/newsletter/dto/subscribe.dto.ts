// apps/pwa-server/src/newsletter/dto/subscribe.dto.ts

import { IsEmail, IsNotEmpty } from 'class-validator'

export class SubscribeDto {
  @IsEmail()
  @IsNotEmpty()
  email_address: string
}

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NewsletterModule } from './newsletter/newsletter.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env', '../../.env'],
        }),
        HttpModule,
        NewsletterModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

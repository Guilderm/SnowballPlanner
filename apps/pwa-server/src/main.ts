// apps/pwa-server/src/main.ts

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)

    // Define allowed origins based on ALLOWED_ORIGINS environment variable
    const allowedOrigins =
        configService.get<string>('ALLOWED_ORIGINS')?.split(',') || []

    // Enable CORS with dynamic origin checking
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })

    // Enable global validation pipes
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    )

    const PORT = configService.get<number>('PWA_SERVER_PORT') || 3300
    await app.listen(PORT)
    console.log(`pwa-server is running on port ${PORT}`)
}
bootstrap()

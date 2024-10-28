// apps/pwa-server/src/main.ts

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)

    // Get allowed origins from environment variable
    const allowedOrigins =
        configService.get<string>('ALLOWED_ORIGINS')?.split(',') || []

    // Log the allowed origins for debugging
    console.log(`CORS allowed origins: ${allowedOrigins.join(', ')}`)

    // Enable CORS with detailed configuration
    app.enableCors({
        origin: (origin, callback) => {
            // Allow requests with no origin, such as server-to-server requests or tools like Postman
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                console.error(`Blocked by CORS policy for origin: ${origin}`)
                callback(new Error('Not allowed by CORS'))
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, // Allow cookies to be sent cross-origin if necessary
    })

    // Enable global validation pipes
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    )

    // Read port from environment variable with default fallback
    const PORT = configService.get<number>('PWA_SERVER_PORT') || 3300
    await app.listen(PORT)
    console.log(`pwa-server is running on port ${PORT}`)
}

bootstrap()

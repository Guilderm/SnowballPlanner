// apps\pwa-server\src\main.ts

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  // Retrieve allowed origins from environment variable and split into an array
  const allowedOrigins =
    configService
      .get<string>('ALLOWED_ORIGINS')
      ?.split(',')
      .map((origin) => origin.trim()) ?? []

  // Log the allowed origins for debugging
  console.log(`CORS allowed origins: ${allowedOrigins.join(', ')}`)

  // Enable CORS using NestJS's built-in CORS support
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like server-to-server or Postman requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        console.error(`Blocked by CORS policy for origin: ${origin}`)
        callback(new Error(`Not allowed by CORS for origin: ${origin}`))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allows cookies to be sent cross-origin if necessary
  })

  // Enable global validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  // Define the port from environment variable with a default fallback
  const PORT =
    process.env.PORT ?? configService.get<number>('PWA_SERVER_PORT') ?? 3300
  await app.listen(PORT)
  console.log(`pwa-server is running on port ${PORT}`)
}

bootstrap()

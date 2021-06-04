import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // tells the app we want to use the validation pipe to help validate data types
  app.useGlobalPipes(new ValidationPipe({
    // validates to make sure that anything not listed on the DTo doesn't go through (i.e. "isEnabled" for createCoffeeDto)
    whitelist: true,
    // will respond with an error if something not wanted is listed on the req.body
    forbidNonWhitelisted: true,
    // when a req is sent, the body is not instantly changed to an instance of teh Dto. To do so, set transform: true. Also does primitive type conversions. May slightly impact performance
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))
  await app.listen(3000);
}
bootstrap();

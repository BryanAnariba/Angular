import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Poner a toda ruta api
  app.setGlobalPrefix('api');


  // Con esto damos a entender que solo vamos a aceptar la informacion o req body como nosotros lo definamos en los dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Para poder consumir desde angular
  console.log('Enabled Cors')
  app.enableCors({
    origin: ['http://localhost:4200'], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();

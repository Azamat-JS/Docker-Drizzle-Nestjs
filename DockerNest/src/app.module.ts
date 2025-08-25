import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      entities:[Product],
      synchronize:true
    }),
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

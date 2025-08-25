import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) 
    private readonly productRepo: Repository<Product>
  ){}
  create(createProductDto: CreateProductDto) {
    return this.productRepo.save(createProductDto);
  }

  findAll() {
    return this.productRepo.find();
  }
}

import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<CreateProductDto & Product>;
    findAll(): Promise<Product[]>;
}

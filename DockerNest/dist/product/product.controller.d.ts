import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<CreateProductDto & import("./entities/product.entity").Product>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
}

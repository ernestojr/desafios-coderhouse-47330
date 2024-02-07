import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Array<Product>;
  constructor() {
    this.products = [];
  }
  create(createProductDto: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...createProductDto,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

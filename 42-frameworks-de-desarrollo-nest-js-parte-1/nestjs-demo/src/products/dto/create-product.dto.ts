export class CreateProductDto {
  title: string;
  description: string;
  price: number;
  stock: number;
  category: Array<string>;
}

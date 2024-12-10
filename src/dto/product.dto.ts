import { IsString, IsInt, Min, IsOptional, IsNotEmpty } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  sold?: number;

  @IsOptional()
  @IsString()
  description?: string;
}


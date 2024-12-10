import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatus, HttpMessage } from 'src/global/globalEnum';
import { ProductDTO } from 'src/dto/product.dto';
import * as XLSX from 'xlsx';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'T-Shirt Dior 2024',
      brand: 'Dior',
      price: 150,
      stock: 50,
      sold: 10,
      description: 'Stylish T-shirt with Dior branding.',
    },
    {
      id: 2,
      name: 'Dior Hoodie',
      brand: 'Dior',
      price: 300,
      stock: 30,
      sold: 5,
      description: 'Comfortable hoodie with signature Dior logo.',
    },
    {
      id: 3,
      name: 'Dior Jeans',
      brand: 'Dior',
      price: 250,
      stock: 40,
      sold: 15,
      description: 'Classic denim jeans with a modern fit.',
    },
    {
      id: 4,
      name: 'Dior Jacket',
      brand: 'Dior',
      price: 500,
      stock: 20,
      sold: 8,
      description: 'Luxury jacket with premium materials.',
    },
    {
      id: 5,
      name: 'T-Shirt Gucci 2024',
      brand: 'Gucci',
      price: 180,
      stock: 60,
      sold: 20,
      description: 'Trendy T-shirt with Gucci branding.',
    },
    {
      id: 6,
      name: 'Gucci Sneakers',
      brand: 'Gucci',
      price: 350,
      stock: 25,
      sold: 12,
      description: 'High-end sneakers with Gucci design.',
    },
    {
      id: 7,
      name: 'Gucci Sweatshirt',
      brand: 'Gucci',
      price: 220,
      stock: 35,
      sold: 10,
      description: 'Comfortable sweatshirt with bold Gucci logo.',
    },
    {
      id: 8,
      name: 'Chanel Dress',
      brand: 'Chanel',
      price: 800,
      stock: 10,
      sold: 3,
      description: 'Elegant Chanel dress, perfect for special occasions.',
    },
    {
      id: 9,
      name: 'Chanel Jacket',
      brand: 'Chanel',
      price: 600,
      stock: 15,
      sold: 6,
      description: 'Timeless Chanel jacket with a sleek design.',
    },
    {
      id: 10,
      name: 'Louis Vuitton Shirt',
      brand: 'Louis Vuitton',
      price: 300,
      stock: 40,
      sold: 18,
      description: 'Stylish shirt with Louis Vuitton logo and premium fabric.',
    },
    {
      id: 11,
      name: 'T-Shirt Dior 2025',
      brand: 'Dior',
      price: 160,
      stock: 45,
      sold: 12,
      description: 'Modern Dior T-shirt, perfect for casual wear.',
    },
    {
      id: 12,
      name: 'Dior Long Sleeve Shirt',
      brand: 'Dior',
      price: 280,
      stock: 38,
      sold: 10,
      description: 'Elegant long sleeve shirt with Dior brand.',
    },
    {
      id: 13,
      name: 'Gucci Hoodie 2024',
      brand: 'Gucci',
      price: 310,
      stock: 28,
      sold: 5,
      description: 'Warm and stylish hoodie with the Gucci logo.',
    },
    {
      id: 14,
      name: 'Gucci Slim Fit Jeans',
      brand: 'Gucci',
      price: 270,
      stock: 22,
      sold: 8,
      description: 'Slim fit jeans with Gucci branding.',
    },
    {
      id: 15,
      name: 'Louis Vuitton Casual Shirt',
      brand: 'Louis Vuitton',
      price: 320,
      stock: 50,
      sold: 15,
      description: 'Casual shirt with signature Louis Vuitton logo.',
    },
    {
      id: 16,
      name: 'Louis Vuitton Sneakers',
      brand: 'Louis Vuitton',
      price: 400,
      stock: 30,
      sold: 12,
      description: 'High-quality sneakers with Louis Vuitton style.',
    },
    {
      id: 17,
      name: 'Chanel Sweater',
      brand: 'Chanel',
      price: 450,
      stock: 25,
      sold: 9,
      description: 'Cozy and stylish Chanel sweater.',
    },
    {
      id: 18,
      name: 'Chanel T-Shirt',
      brand: 'Chanel',
      price: 220,
      stock: 55,
      sold: 20,
      description: 'Casual T-shirt with Chanel branding.',
    },
    {
      id: 19,
      name: 'Dior Leather Jacket',
      brand: 'Dior',
      price: 1200,
      stock: 15,
      sold: 4,
      description: 'Premium leather jacket from Dior.',
    },
    {
      id: 20,
      name: 'Gucci Leather Jacket',
      brand: 'Gucci',
      price: 1100,
      stock: 10,
      sold: 3,
      description: 'Luxurious leather jacket with Gucci design.',
    },
    {
      id: 21,
      name: 'Dior Polo Shirt',
      brand: 'Dior',
      price: 210,
      stock: 45,
      sold: 12,
      description: 'Classic polo shirt with Dior embroidery.',
    },
    {
      id: 22,
      name: 'Gucci Formal Shirt',
      brand: 'Gucci',
      price: 230,
      stock: 30,
      sold: 10,
      description: 'Stylish formal shirt with Gucci details.',
    },
    {
      id: 23,
      name: 'Dior Sneakers',
      brand: 'Dior',
      price: 350,
      stock: 25,
      sold: 5,
      description: 'Premium sneakers with Dior design.',
    },
    {
      id: 24,
      name: 'Chanel Formal Dress',
      brand: 'Chanel',
      price: 1500,
      stock: 5,
      sold: 2,
      description: 'Luxurious formal dress perfect for events.',
    },
    {
      id: 25,
      name: 'Louis Vuitton Sweatshirt',
      brand: 'Louis Vuitton',
      price: 280,
      stock: 40,
      sold: 15,
      description: 'Comfortable sweatshirt with Louis Vuitton logo.',
    },
    {
      id: 26,
      name: 'Dior Scarf',
      brand: 'Dior',
      price: 120,
      stock: 60,
      sold: 20,
      description: 'Luxury scarf with Dior branding.',
    },
    {
      id: 27,
      name: 'Gucci Boots',
      brand: 'Gucci',
      price: 500,
      stock: 30,
      sold: 10,
      description: 'Elegant Gucci boots with premium leather.',
    },
    {
      id: 28,
      name: 'Chanel Sunglasses',
      brand: 'Chanel',
      price: 350,
      stock: 25,
      sold: 5,
      description: 'Stylish sunglasses with Chanel branding.',
    },
    {
      id: 29,
      name: 'Louis Vuitton Belt',
      brand: 'Louis Vuitton',
      price: 250,
      stock: 40,
      sold: 10,
      description: 'Luxury belt with Louis Vuitton logo.',
    },
    {
      id: 30,
      name: 'Gucci Wallet',
      brand: 'Gucci',
      price: 220,
      stock: 50,
      sold: 12,
      description: 'Premium wallet with Gucci logo.',
    },
    {
      id: 31,
      name: 'Dior Casual Shoes',
      brand: 'Dior',
      price: 400,
      stock: 35,
      sold: 8,
      description: 'Comfortable and stylish casual shoes from Dior.',
    },
    {
      id: 32,
      name: 'Chanel Handbag',
      brand: 'Chanel',
      price: 1500,
      stock: 12,
      sold: 4,
      description: 'Elegant Chanel handbag perfect for any occasion.',
    },
    {
      id: 33,
      name: 'Dior Sunglasses',
      brand: 'Dior',
      price: 350,
      stock: 45,
      sold: 12,
      description: 'Luxury sunglasses with Dior design.',
    },
    {
      id: 34,
      name: 'Louis Vuitton Cardholder',
      brand: 'Louis Vuitton',
      price: 180,
      stock: 55,
      sold: 18,
      description: 'Sleek cardholder with Louis Vuitton details.',
    },
    {
      id: 35,
      name: 'Gucci Slip-On Shoes',
      brand: 'Gucci',
      price: 300,
      stock: 20,
      sold: 7,
      description: 'Stylish slip-on shoes with Gucci branding.',
    },
    {
      id: 36,
      name: 'Dior Trousers',
      brand: 'Dior',
      price: 320,
      stock: 40,
      sold: 15,
      description: 'Elegant trousers with Dior details.',
    },
    {
      id: 37,
      name: 'Louis Vuitton Jacket',
      brand: 'Louis Vuitton',
      price: 700,
      stock: 15,
      sold: 6,
      description: 'Luxurious jacket with Louis Vuitton design.',
    },
    {
      id: 38,
      name: 'Chanel Boots',
      brand: 'Chanel',
      price: 450,
      stock: 10,
      sold: 3,
      description: 'Stylish boots with Chanel branding.',
    },
    {
      id: 39,
      name: 'Gucci Cap',
      brand: 'Gucci',
      price: 180,
      stock: 50,
      sold: 22,
      description: 'Trendy cap with Gucci logo.',
    },
    {
      id: 40,
      name: 'Louis Vuitton Backpack',
      brand: 'Louis Vuitton',
      price: 950,
      stock: 20,
      sold: 8,
      description: 'Premium Louis Vuitton backpack.',
    },
    {
      id: 41,
      name: 'Dior Watch',
      brand: 'Dior',
      price: 1500,
      stock: 8,
      sold: 2,
      description: 'Luxury watch with Dior design.',
    },
  ];
  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: string): Product {
    const index = this.products.findIndex(
      (product) => product.id === Number(id),
    );
    if (index == -1) {
      throw new Error('Product not found');
    }
    return this.products[index];
  }
  createProduct(productDTO: ProductDTO): Product {
    const newProduct: Product = {
      id: this.generateId(), // Dùng hàm để sinh ID
      name: productDTO.name,
      brand: productDTO.brand,
      price: productDTO.price,
      stock: productDTO.stock,
      sold: productDTO.sold ?? 0,
      description: productDTO.description,
    };
    this.products.push(newProduct); // Thêm sản phẩm vào danh sách
    return newProduct;
  }
  private generateId(): number {
    // Sinh ID duy nhất dựa trên thời gian (hoặc UUID nếu cần)
    return this.products.length > 0
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 1;
  }
  updateProduct(id: string, productDTO: ProductDTO): Product {
    const index = this.products.findIndex(
      (product) => product.id === Number(id),
    );
    if (index == -1) {
      throw new Error('Product not found');
    }
    this.products[index] = { ...this.products[index], ...productDTO };
    return this.products[index];
  }
  deleteProduct(id: string): Product {
    const index = this.products.findIndex(
      (product) => product.id === Number(id),
    );
    if (index == -1) {
      throw new Error('Product not found');
    }
    return this.products.splice(index, 1)[0];
  }
  importProducts(productsDTO: ProductDTO[]): Product[] {
    // Lấy ID lớn nhất hiện tại hoặc khởi tạo là 0
    const currentMaxId =
      this.products.length > 0
        ? Math.max(...this.products.map((p) => p.id))
        : 0;

    // Tạo danh sách sản phẩm mới
    const newProducts: Product[] = productsDTO.map((productDTO, index) => ({
      id: currentMaxId + index + 1, // Tính ID dựa trên thứ tự
      name: productDTO.name,
      brand: productDTO.brand,
      price: productDTO.price,
      stock: productDTO.stock,
      sold: productDTO.sold ?? 0,
      description: productDTO.description,
    }));

    // Thêm sản phẩm mới vào danh sách hiện có
    this.products.push(...newProducts);

    return newProducts;
  }
}

export class Product {
    id?: number;
    name?: string;
    brand?: string;
    price?: number;
    stock?: number;
    sold?: number;
    description?: string;
    constructor(id: number, name: string, brand: string, price: number, stock: number, sold: number, description: string){
        if(id!=null){
            this.id = id;
        }
        if(name!=null){
            this.name = name;
        }
        if(brand!=null){
            this.brand = brand;
        }
        if(price!=null){
            this.price = price;
        }
        if(stock!=null){
            this.stock = stock;
        }
        if(sold!=null){
            this.sold = sold;
        }
        if(description!=null){
            this.description = description;
        }
    }
  }
  
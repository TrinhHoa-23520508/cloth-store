import { Controller, Get, Param, Post , Body, Put, Delete} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { ProductDTO } from 'src/dto/product.dto';
import { HttpStatus, HttpMessage } from 'src/global/globalEnum';
import { ValidationPipe } from '@nestjs/common';
import { Product } from 'src/models/product.model';
@Controller('product')
export class ProductController{
    constructor(private readonly productService: ProductService){}
    @Get()
    getProducts():ResponseData<Product[]>{
        try{
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        }catch(error){
            return new ResponseData<Product[]>(null, HttpStatus.INTERNAL_SERVER_ERROR, HttpMessage.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('/:id')
    getProductById(@Param('id') id: string):ResponseData<Product>{
        try{
            return new ResponseData<Product>(this.productService.getProductById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        }catch(error){
            return new ResponseData<Product>(null, HttpStatus.NOT_FOUND, HttpMessage.NOT_FOUND);
        }
    }
    @Post()
    createProduct(@Body(new ValidationPipe()) productDTO: ProductDTO):ResponseData<Product>{
        try{
            return new ResponseData<Product>(this.productService.createProduct(productDTO), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        }catch(error){
            return new ResponseData<Product>(null, HttpStatus.INTERNAL_SERVER_ERROR, HttpMessage.INTERNAL_SERVER_ERROR);
        }
    }   
    @Put('/:id')
    updateProduct(@Param('id') id: string, @Body(new ValidationPipe()) productDTO: ProductDTO):ResponseData<Product>{
        try{
            return new ResponseData<Product>(this.productService.updateProduct(id, productDTO), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        }catch(error){
            return new ResponseData<Product>(null, HttpStatus.NOT_FOUND, HttpMessage.NOT_FOUND);
        }
    }
    @Delete('/:id')
    deleteProduct(@Param('id') id: string):ResponseData<Product>{
        try{
            return new ResponseData<Product>(this.productService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        }catch(error){
            return new ResponseData<Product>(null, HttpStatus.NOT_FOUND, HttpMessage.NOT_FOUND);
        }
    }
}
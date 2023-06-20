import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaClient){}

  create(CreateProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: CreateProductDto
    })
  }

  findAll() {
    return this.prisma.product.findMany({
       orderBy: {
        createAt: 'desc'
       }
    })
  }

  findOne(id: number) {
    return this.prisma.product.findUniqueOrThrow({
      where: {
        id
      }
    })
  }

  update(id: number, updateCategoryDto: UpdateProductDto) {
    console.log(updateCategoryDto);
    
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateCategoryDto
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where:{
        id,
      }
    })
  }
}

import { Body, Controller, Post, Res } from "decorators-express";
import express from "express";
import Container, { Inject, Service } from "typedi";
import { ProductService } from "./product.service";

@Controller("/product")
@Service()
export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  @Post("")
  async create(@Res() res: express.Response, @Body() body: any) {
    try {
      const productService = Container.get(ProductService);
      const result = await productService.create();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
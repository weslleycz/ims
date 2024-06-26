import { Service } from "typedi";
import { ProductModel } from "../../models/product.model";
import { orm } from "../../servers/snapjson";
import { ProductCreateDTO, ProductUpdateDTO } from "./product.dto";

@Service()
export class ProductService {
  async create({
    category,
    description,
    name,
    price,
    image,
    bar_code,
    stock,
  }: ProductCreateDTO) {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );
      await productCollection.add({
        category,
        description,
        name,
        price,
        image,
        createdAt: new Date(),
        updatedAt: new Date(),
        entity_Name: "product",
        bar_code,
        stock,
      });
      const productsCollection = await productCollection.find({
        entity_Name: "product",
      });

      const products = productsCollection.map((product) => {
        return product.toObject();
      });
      return products;
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }

  async getAll() {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );

      const productsCollection = await productCollection.find({
        entity_Name: "product",
      });

      const products = productsCollection.map((product) => {
        return product.toObject();
      });
      return products;
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }

  async delete(id: number) {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );
      await productCollection.deleteOne({
        __id: Number(id),
      });

      const productsCollection = await productCollection.find({
        entity_Name: "product",
      });

      const products = productsCollection.map((product) => {
        return product.toObject();
      });
      return products;
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }

  async update(id: number, body: ProductUpdateDTO) {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );
      const filteredObj = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => {
          key
          return value !== undefined;
        })
      );
      await productCollection.updateOne(
        {
          ...filteredObj,
          updatedAt: new Date(),
        },
        { __id: Number(id) }
      );
      const productsCollection = await productCollection.find({
        entity_Name: "product",
      });
      const products = productsCollection.map((product) => {
        return product.toObject();
      });
      return products;
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }

  async select(id: number) {
    try {
      const productCollection = await orm.collection<ProductModel>(
        "product",
        true
      );
      const product = await productCollection.findById(Number(id));
      return product?.toObject();
    } catch (error) {
      throw new Error("Não foi possível realizar a operação");
    }
  }
}

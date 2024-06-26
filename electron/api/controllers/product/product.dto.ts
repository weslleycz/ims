import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class ProductCreateDTO  {
  @IsString({ message: "O nome deve ser uma string." })
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @IsString({ message: "A descrição deve ser uma string." })
  @IsOptional({ message: "A description é opcional." })
  description: string;

  @IsNumber({}, { message: "O preço deve ser um número." })
  @IsNotEmpty({ message: "O preço é obrigatório." })
  price: number;

  @IsString({ message: "A categoria deve ser uma string." })
  @IsNotEmpty({ message: "A categoria é obrigatória." })
  category: string;

  @IsString({ message: "A imagem deve ser uma string." })
  @IsOptional({ message: "A imagem é opcional." })
  image?: string | undefined;

  @IsString({ message: "O código de barras deve ser uma string." })
  @IsOptional({ message: "O código de barras é opcional." })
  bar_code: string;

  @IsNumber({}, { message: "O estoque deve ser um número." })
  @IsNotEmpty({ message: "O estoque é obrigatório." })
  stock: number;
}

export class ProductUpdateDTO {
  @IsOptional()
  @IsString({ message: "O nome deve ser uma string." })
  name: string;
  
  @IsOptional()
  @IsString({ message: "A descrição deve ser uma string." })
  description?: string;

  @IsOptional()
  @IsNumber({}, { message: "O preço deve ser um número." })
  price?: number;

  @IsOptional()
  @IsString({ message: "A categoria deve ser uma string." })
  category?: string;

  @IsOptional()
  @IsString({ message: "A imagem deve ser uma string." })
  image?: string;

  @IsOptional()
  @IsString({ message: "O código de barras deve ser uma string." })
  bar_code?: string;

  @IsOptional()
  @IsNumber({}, { message: "O estoque deve ser um número." })
  stock?: number;
}
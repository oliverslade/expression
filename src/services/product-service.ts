import { Product } from "../models/product";

export const getProducts = async () => {
  return await Product.findAll();
};

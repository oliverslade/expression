import { Request, Response } from "express";
import { getProducts } from "../services/product-service";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error getting products" });
  }
};

export const health = (req: Request, res: Response) => {
  res.send("OK");
};

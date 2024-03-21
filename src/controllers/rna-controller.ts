import { Request, Response } from "express";
import { toRna } from "../services/rna-service";
import { InvalidDnaError } from "../models/errors/InvalidDnaError";

export const convertDnaToRnaString = async (req: Request, res: Response) => {
  try {
    const dna = req.body.dna;
    const result = toRna(dna as string);
    res.json(result);
  } catch (error) {
    if (error instanceof InvalidDnaError) {
      res.status(400).json({ message: "Bad request: " + error.message });
    } else {
      res.status(500).json({
        message:
          "Internal server error: " + (error as Error).message ||
          "Unknown error.",
      });
    }
  }
};

export const health = (req: Request, res: Response) => {
  res.send("OK");
};

import { Request, Response } from 'express';
import { getAllProducts, health } from '../../../src/controllers/product-controller';
import * as productService from '../../../src/services/product-service';
import { Product } from '../../../src/models/product';

jest.mock('../../../src/services/product-service');

describe('Product Controller', () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {} as Request;
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllProducts', () => {
    it('should return products and send a JSON response', async () => {
      const mockProducts = [
        Product.build({ id: 1, name: 'Product 1', price: 10.99, quantity: 5 }),
        Product.build({ id: 2, name: 'Product 2', price: 19.99, quantity: 10 }),
      ];
      jest.spyOn(productService, 'getProducts').mockResolvedValue(mockProducts);
    
      await getAllProducts(req, res);
    
      expect(productService.getProducts).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(mockProducts);
    });

    it('should return 500 and send an error message when an error occurs', async () => {
      const errorMessage = 'Internal server error getting products';
      jest.spyOn(productService, 'getProducts').mockRejectedValue(new Error());
  
      await getAllProducts(req, res);
  
      expect(productService.getProducts).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  describe('health', () => {
    it('should send "OK" response', () => {
      health(req, res);

      expect(res.send).toHaveBeenCalledWith('OK');
    });
  });
});

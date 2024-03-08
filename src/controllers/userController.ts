import { Request, Response } from 'express';
import { getName as getServiceName } from '../services/userService';

export const getName = (req: Request, res: Response) => {
    res.send(getServiceName());
}

export const health = (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
};
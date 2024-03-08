import { Request, Response } from 'express';
import { getName as getServiceName } from '../../../src/services/userService';
import { getName } from '../../../src/controllers/userController';

jest.mock('../../../src/services/userService');

describe('getName', () => {
    it('should return "test"', () => {
        (getServiceName as jest.MockedFunction<typeof getServiceName>).mockReturnValue('test');
        const req = {} as Request;
        const res = { send: jest.fn() } as unknown as Response;
        getName(req, res);
        expect(res.send).toHaveBeenCalledWith('test');
    });
});
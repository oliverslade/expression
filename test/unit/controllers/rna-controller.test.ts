import { Request, Response } from "express";
import {
  convertDnaToRnaString,
  health,
} from "../../../src/controllers/rna-controller";
import { toRna } from "../../../src/services/rna-service";
import { InvalidDnaError } from "../../../src/models/errors/InvalidDnaError";

jest.mock("../../../src/services/rna-service");

describe("rna-controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    mockRequest = {};
    mockResponse = {
      json: mockJson,
      status: mockStatus,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("convertDnaToRnaString should return RNA string", async () => {
    const mockDna = "GCTA";
    const mockRna = "CGAU";
    (toRna as jest.Mock).mockReturnValue(mockRna);
    mockRequest.body = { dna: mockDna };

    await convertDnaToRnaString(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(toRna).toHaveBeenCalledWith(mockDna);
    expect(mockJson).toHaveBeenCalledWith(mockRna);
  });

  it("convertDnaToRnaString should handle invalid DNA input", async () => {
    const mockDna = "GCTAX";
    const mockError = new InvalidDnaError("Invalid input DNA.");
    (toRna as jest.Mock).mockImplementation(() => {
      throw mockError;
    });
    mockRequest.body = { dna: mockDna };

    await convertDnaToRnaString(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(toRna).toHaveBeenCalledWith(mockDna);
    expect(mockStatus).toHaveBeenCalledWith(400);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Bad request: " + mockError.message,
    });
  });

  it("convertDnaToRnaString should handle internal server error", async () => {
    const mockDna = "GCTA";
    const mockError = new Error("Unexpected error.");
    (toRna as jest.Mock).mockImplementation(() => {
      throw mockError;
    });
    mockRequest.body = { dna: mockDna };

    await convertDnaToRnaString(
      mockRequest as Request,
      mockResponse as Response
    );

    expect(toRna).toHaveBeenCalledWith(mockDna);
    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({
      message: "Internal server error: " + mockError.message,
    });
  });

  it("health should return OK", () => {
    const mockSend = jest.fn();
    mockResponse.send = mockSend;

    health(mockRequest as Request, mockResponse as Response);

    expect(mockSend).toHaveBeenCalledWith("OK");
  });
});

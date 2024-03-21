export class InvalidDnaError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InvalidDnaError";
  }
}

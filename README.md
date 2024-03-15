# Expression API

## Getting Started

To get started with Expression, follow these steps:

1. Clone the repository

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up the MySQL database and update the configuration in `src/config/database.ts`.

4. Build the TypeScript code:
   ```
   npm run build
   ```

5. Run the microservice:
   ```
   npm start
   ```

6. Access the API endpoints at `http://localhost:3000`.

## Testing

To run the unit tests for the microservice, use the following command:
```
npm test
```
The unit tests are written using the Jest testing framework and cover critical functionality and edge cases.

The repository also includes API tests using [Bruno](https://www.usebruno.com/):
```
npm run bruno
```

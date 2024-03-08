# Expression - Inventory Management

Welcome to Expression! Responsible for managing and tracking inventory levels, product information, and stock movements.

## Features

- **Product Management**: Efficiently manage product information, including details such as name, description, price, and quantity.
- **Inventory Tracking**: Keep track of real-time inventory levels and receive alerts for low stock situations.
- **Stock Movements**: Record and monitor stock movements, including inbound and outbound transactions.
- **Reporting and Analytics**: Generate insightful reports and analytics on inventory performance, stock trends, and product popularity.
- **Integration-ready**: Seamlessly integrate with other microservices and external systems through well-defined APIs.

## Technologies Used

- **Node.js**: A powerful and scalable runtime environment for building server-side applications.
- **TypeScript**: A typed superset of JavaScript that enhances code maintainability and reduces runtime errors.
- **Express.js**: A fast and minimalist web application framework for building robust APIs.
- **MySQL**: A reliable and widely-used relational database for storing and retrieving inventory data.
- **Sequelize**: A promise-based ORM (Object-Relational Mapping) for interacting with the MySQL database.
- **Jest**: A popular testing framework for writing and running unit tests to ensure code quality and reliability.
- **Docker**: A containerization platform for packaging and deploying the microservice in a scalable and portable manner.

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

Happy inventory management!

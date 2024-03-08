import { Sequelize } from "sequelize";
import "reflect-metadata";

const sequelize = new Sequelize("expression", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;

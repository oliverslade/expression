import express from "express";
import { health, getAllProducts } from "./controllers/product-controller";

const app = express();
const PORT = 3000;

app.get("/health", health);
app.get("/products", getAllProducts);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

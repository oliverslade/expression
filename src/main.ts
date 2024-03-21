import express from "express";
import { health, convertDnaToRnaString } from "./controllers/rna-controller";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", health);
app.post("/convert-dna-to-rna", convertDnaToRnaString);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

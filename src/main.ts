import express from 'express';
import {health, getName} from './controllers/userController';

const app = express();
const PORT = 3000;

app.get('/health', health);
app.get('/name', getName);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

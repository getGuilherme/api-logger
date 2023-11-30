// app.ts
import express from 'express';
import dataRoutes from './routes/dataRoutes';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use('/api/logger', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

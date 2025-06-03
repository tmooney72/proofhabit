import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import habitRoutes from './routes/habits.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('ProofHabit API is running with TypeScript');
});
app.use('/api/habits', habitRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



declare global {
  namespace Express {
    interface Request {
      user?: {
        uid: string;
        email?: string;
      };
    }
    interface Response {
      user?: {
        uid: string;
        email?: string;
      };
    }
  }
}

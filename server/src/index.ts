import express, { Request, Response, NextFunction, Express } from 'express';

const app: Express = express();
const PORT = process.env.PORT || 3300;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
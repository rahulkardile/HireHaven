import express, { Request, Response, NextFunction, Express } from 'express';
import CustomError from './types/CustomError';
import router from './routes/routes';

const app: Express = express();
const PORT = process.env.PORT || 3300;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, TypeScript with Express!');
});

app.use("/api", router);

app.use((err: CustomError, req: Request, res: Response, next: NextFunction)=>{
    try {
        
        let message = err.message || "Internal server error";
        let status = err?.statusCode || 500;
        
        res.status(status).json({
            success: false,
            message
        })

    } catch (error) {
        next(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
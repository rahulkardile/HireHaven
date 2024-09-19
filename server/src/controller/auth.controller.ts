import { NextFunction, Request, Response } from "express";

export default class Auth {
    static async login(req: Request, res: Response, next: NextFunction){
        try {
            const { } = req.body;
            
        } catch (error) {
            next(error);
        }
    }
}

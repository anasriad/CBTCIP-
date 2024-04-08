import { NextFunction, Request, Response } from "express"

export default function CheckForRoles(req: Request, res: Response, next: NextFunction) {

    const { Role } = req.body
    
    Role === 'Admin' ? next() : res.status(401).send('You are not allowed to access this')
}
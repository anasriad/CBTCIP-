import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import Router from '../Routers'
export default function ApplyGlobalMiddlewares(app: Express) {

    app.use(express.json())
    app.use(cors({
        credentials: true,
        origin: 'http://localhost:5173',
    }))
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use(helmet())
    app.use(Router)

}
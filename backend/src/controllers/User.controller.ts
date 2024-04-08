import { Request, Response } from "express";
import { GenerateRefreshToken, GenerateWebToken } from "../utils/jwt";
import dotenv from 'dotenv'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import log from "../helpers/logger";
import { CreateSessionService, SignUpService } from "../services/User.service";

dotenv.config()

export async function createSessionController(req: Request, res: Response) {
    const { email, password } = req.body
    console.log(email, password)
    try {
        const User = await CreateSessionService(email, password)
        res.cookie(

            'access-token',

            GenerateWebToken(

                { userId: User?.Id, role: User?.Role },

                process.env.ACCESS_PRIVATE_TOKEN_KEY!
            )

        )
        res.cookie
            (
                'refresh-token',

                GenerateRefreshToken
                    (
                        { userId: User?.Id, Role: User?.Role },

                        process.env.REFRESH_PRIVATE_TOKEN_KEY!
                    ),

                { maxAge: 9000000 }
            )
        res.status(200).send(User)
    } catch (error) {

        if (error instanceof PrismaClientKnownRequestError) {

            if (error.code === "P2025") res.status(404).send('Your Email or Password do not Exist')
        }

        else {

            res.status(500).send('Server Error')
            log.error(error)
        }
    }
}

export async function SignUpController(req: Request, res: Response) {
    try {
        const User = await SignUpService(req)
        res.cookie(

            'access-token',

            GenerateWebToken(

                { userId: User?.Id, role: User?.Role },

                process.env.ACCESS_PRIVATE_TOKEN_KEY!
            )

        )
        res.cookie
            (
                'refresh-token',

                GenerateRefreshToken
                    (
                        { userId: User?.Id, Role: User?.Role },

                        process.env.REFRESH_PRIVATE_TOKEN_KEY!
                    ),

                { maxAge: 9000000 }
            )
        res.status(200).send(User)
    } catch (error) {

    }
}
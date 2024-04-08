import { faker } from "@faker-js/faker";
import prisma from "../../prisma/Initiator";
import { Request } from 'express'
export async function CreateSessionService(email: string, password: string) {

    return await prisma.user.findFirstOrThrow({
        where: {
            AND: {
                Email: email,
                Password: password
            }
        },
        select: {
            Id: true,
            Email: true,
            Password: true,
            PhoneNumber: true,
            FirstName: true,
            LastName: true,
            Role: true,
            associationId: true,
            Event: {
                select: {
                    Id: true,
                    Name: true,
                }
            }
        }
    })
}

export const SignUpService = async (req: Request) => {
    const { FirstName, LastName, PhoneNumber, Email, Password, Role, associationId } = req.body
    await prisma.user.create({
        data: {
            Id: faker.string.uuid(),
            FirstName: FirstName,
            LastName: LastName,
            associationId: associationId,
            PhoneNumber: PhoneNumber,
            Role: Role,
            Email: Email,
            Password: Password
        }
    })
    return GetOneUserService(Email)
}

export const GetOneUserService = async (email: string) => {
    return prisma.user.findFirstOrThrow({
        where: {
            Email: email
        },
        select: {
            Id: true,
            FirstName: true,
            LastName: true,
            PhoneNumber: true,
            Role: true,
            Email: true,
            Password: true,
            associationId: true,
            Event: {
                select: {
                    Id: true,
                    Name: true
                }
            }
        }
    })
}
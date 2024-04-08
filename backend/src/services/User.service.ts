import prisma from "../../prisma/Initiator";

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
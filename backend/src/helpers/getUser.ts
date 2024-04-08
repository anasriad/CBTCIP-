import prisma from "../../prisma/Initiator";
import log from "./logger";

export default async function getUser() {
    const User = await prisma.user.findFirst({
        where: {
            Role: 'Board'
        },
        select: {
            Email: true,
            Password: true
        }
    })
    log.info(User)
}

getUser()
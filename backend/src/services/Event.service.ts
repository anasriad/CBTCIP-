import { Request } from "express"
import prisma from "../../prisma/Initiator"
import { faker } from "@faker-js/faker"
export const AddEventService = async(req: Request)=>{
    const { Name, startDate, endDate, Description, associationId, userId } = req.body
    await prisma.event.create({
        data:{
            Id: faker.string.uuid(),
            Name: Name,
            StartsAt: startDate,
            EndsAt: endDate,
            Description: Description,
            associationId: associationId,
            userId: userId,
        }
    })
}
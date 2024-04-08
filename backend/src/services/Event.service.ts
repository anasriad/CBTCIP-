import { Request } from "express"
import prisma from "../../prisma/Initiator"
import { faker } from "@faker-js/faker"
export const AddEventService = async (req: Request) => {
    const { Name, startDate, endDate, Description, associationId, userId } = req.body
    await prisma.event.create({
        data: {
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
export const GetAssociationEventService = async (Id: string) => {
    const Events = await prisma.event.findMany({
        where: {
            associationId: Id
        },
        select: {
            Id: true,
            Name: true,
            StartsAt: true,
            EndsAt: true,
            CreatedBy: true,
            AddedAt: true,
            associationId: true,
            Description: true
        }
    })
    return Events
}

export const updateEventService = async (req: Request) => {
    const { Id, Name, startDate, endDate, Description } = req.body
    await prisma.event.update({
        where: {
            Id: Id
        },
        data: {
            Name: Name,
            StartsAt: startDate,
            EndsAt: endDate,
            Description: Description
        }
    })
}

export const deleteEventService = async (eventId: string) => {
    await prisma.event.delete({
        where: {
            Id: eventId
        }
    })
}
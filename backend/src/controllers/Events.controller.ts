import { Request, Response } from "express";
import prisma from "../../prisma/Initiator";
import { faker } from "@faker-js/faker";
import { AddEventService, GetAssociationEventService, deleteEventService, updateEventService } from "../services/Event.service";
export async function ScheduleEventController(req: Request, res: Response) {
    try {
        console.log(req.body)
        await AddEventService(req)
        res.status(200).send('Event Successfully Added')
    } catch (error) {
        res.status(500).send('Cannot Add Event')
    }
}

export async function GetAssociationEventController(req: Request, res: Response) {
    const { associationId } = req.params
    try {
        const Events = await GetAssociationEventService(associationId)
        res.status(200).send(Events)
    } catch (error) {
        res.status(501).send('Backend Error')
    }
}

export async function updateEventController(req: Request, res: Response) {

    try {

        await updateEventService(req)

        res.status(200).send('Event Updated Successfully')

    } catch (error) {

        res.status(500).send('Cannot Update Event')

    }
}

export async function deleteEventController(req: Request, res: Response) {
    const { eventId } = req.params
    try {
        await deleteEventService(eventId)
        res.status(200).send('Event Canceled Succssfully')
    } catch (error) {
        res.status(500).send('Backend Error')
    }
}
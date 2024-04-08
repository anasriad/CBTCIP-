import { Request, Response } from "express";
import prisma from "../../prisma/Initiator";
import { faker } from "@faker-js/faker";
import { AddEventService } from "../services/Event.service";
export default async function ScheduleEventController(req: Request, res: Response) {
    try {
        console.log(req.body)
        await AddEventService(req)
        res.status(200).send('Event Successfully Added')
    } catch (error) {
        res.status(500).send('Cannot Add Event')
    }
}
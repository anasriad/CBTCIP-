import { GetAssociationService } from "../services/Association.service";
import {Request, Response} from 'express'
export async function getAllAssociations(req:Request, res:Response){
    try {
        const associations = await GetAssociationService()
        res.status(200).send(associations)
    } catch (error) {
        res.status(500).send('Error occurred')
    }
}
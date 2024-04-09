import express from 'express'
import { GetAssociationEventController, ScheduleEventController, deleteEventController, updateEventController } from '../controllers/Events.controller'
import CheckForRoles from '../middlewares/CheckForRoles'
import CheckForToken from '../middlewares/checkForToken'

const Events = express()

Events.post('/addEvent', CheckForToken, CheckForRoles, ScheduleEventController)
Events.get('/getEvents/:associationId', CheckForToken, GetAssociationEventController)
Events.put('/updateEvent', CheckForToken, CheckForRoles, updateEventController)
Events.delete('/deleteEvent', CheckForRoles, CheckForToken, deleteEventController)

export default Events
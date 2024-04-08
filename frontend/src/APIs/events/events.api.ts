import { apiSlice } from "../apiSlice";

import { EventPost } from "../../utils/types";

export const eventSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addEvent: builder.mutation({
            query: (NewEvent: EventPost) => ({ url: 'Event/addEvent', method: 'POST', body: NewEvent })
        }),
        getAssociationEvents: builder.query({
            query: (associationId: string) => ({ url: `Event/getEvents/${associationId}` })
        }),
        updateEvent: builder.mutation({
            query: (eventInfo) => ({ url: `Event/updateEvent`, method: 'PUT', body: eventInfo })
        }),
        deleteEvent: builder.mutation({
            query: (eventId) => ({ url: `Event/deleteEvent/${eventId}`, method:'DELETE' })
        })
    })
})

export const { useAddEventMutation, useGetAssociationEventsQuery, useUpdateEventMutation, useDeleteEventMutation } = eventSlice
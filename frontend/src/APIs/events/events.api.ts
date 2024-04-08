import { apiSlice } from "../apiSlice";

interface EventPost {
    Name: string,
    startDate: string,
    endDate: string,
    Description: string,
    associationId: string | undefined,
    userId: string | undefined
}

export const eventSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addEvent: builder.mutation({
            query: (NewEvent: EventPost) => ({ url: 'Event/addEvent', method: 'POST', body: NewEvent })
        }),
        getAssociationEvents: builder.query({
            query: (associationId) => ({ url: `/getEvents/${associationId}` })
        })
    })
})

export const { useAddEventMutation, useGetAssociationEventsQuery } = eventSlice
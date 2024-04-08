import { apiSlice } from "../apiSlice";


export const AssociationSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAssociations: builder.query({
            query: () => ({ url: '/Association/getAll' })
        })
    })
})

export const {useGetAllAssociationsQuery} = AssociationSlice
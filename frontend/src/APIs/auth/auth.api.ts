import { apiSlice } from "../apiSlice";
import { SessionCredential } from "../../utils/types";
export const authAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: SessionCredential) => ({
                url: `/User/login`,
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const {
    useLoginMutation
} = authAPI
import { apiSlice } from "../apiSlice";
import { SessionCredential, SignUp } from "../../utils/types";
export const authAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: SessionCredential) => ({
                url: `/User/login`,
                method: 'POST',
                body: credentials
            })
        }),
        signUp: builder.mutation({
            query: (credentials: SignUp) => ({
                url: 'User/signup',
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignUpMutation
} = authAPI
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { User } from '../../utils/types'
interface AuthState {
    user: User | null;
  }
const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: null
    } as AuthState,
    reducers: {
        SetCredentials: (state, action: PayloadAction<User>) => {
            const user = action.payload
            state.user = user
        },
        DetachCredentials: (state) => {
            state.user = null
        }
    }
})

export const { DetachCredentials, SetCredentials } = authSlice.actions
export default authSlice.reducer
export const getCurrentUser = (state: RootState)=> state.auth.user
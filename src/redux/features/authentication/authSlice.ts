import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type User = {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl?: string;
  };
  
  interface AuthState {
    token: string | null;
    user: User | null;
  }
  
 
  

const initialState: AuthState = {
    token: null,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setUser, logout } = authSlice.actions

export default authSlice.reducer

export const selectUser = (state: RootState) => state.auth.user
import {createSlice} from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'auth',
    initialState: {
        auth: {},
    },
    reducers: {
        setAuthUser: (state, data) => {
            state.auth = data.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setAuthUser} = userReducer.actions

export default userReducer.reducer
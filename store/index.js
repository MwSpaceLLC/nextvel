import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userReducer";

/**
 * export data
 */
export default configureStore({
    reducer: {
        user: userReducer,
    },
})
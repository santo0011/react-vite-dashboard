import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


// user_login
export const user_login = createAsyncThunk(
    'auth/user_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/user-login', info);
            // localStorage.setItem('blog_token', data.token)
            // return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


// const decodeToken = (token) => {
//     if (token) {
//         const decodeToken = jwt(token)
//         const expireTime = new Date(decodeToken.exp * 1000)
//         if (new Date() > expireTime) {
//             localStorage.removeItem('blog_token')
//             return ''
//         } else {
//             return decodeToken
//         }
//     } else {
//         return ''
//     }
// }


export const authReducer = createSlice({
    name: "auth",
    initialState: {
        authenticate: false,
        // userInfo: decodeToken(localStorage.getItem('blog_token')),
        errorMessage: '',
        successMessage: '',
        loader: false
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers: {
        // [user_login.pending]: (state, _) => {
        //     state.loader = true
        // },
        // [user_login.rejected]: (state, { payload }) => {
        //     state.loader = false
        //     state.authenticate = false
        //     state.errorMessage = payload.error
        // },
        // [user_login.fulfilled]: (state, { payload }) => {
        //     state.loader = false
        //     state.authenticate = true
        //     state.successMessage = payload.message
        //     state.userInfo = decodeToken(payload.token)
        // }
    }
});


export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
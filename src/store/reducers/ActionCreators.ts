import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { User } from "../../model/User";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     } catch (e) {
//         if (e instanceof AxiosError) dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
// };

export const fetchUsers = createAsyncThunk("user/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) return thunkAPI.rejectWithValue(e.message);
    }
});

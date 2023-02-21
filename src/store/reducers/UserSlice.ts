import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/User";

interface UserState {
    users: User[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default userSlice.reducer;

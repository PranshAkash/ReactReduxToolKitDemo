import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
name: "user",
initialState : [],
reducers : {
    addUser(state,action){},
    removeUser(state,action){},
    deleteUsers(state,action){},
}
});

console.log(userSlices.actions);
export default userSlices.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    address: "",
    washing: "",
    activeAddress: "",
  },
  reducers: {
    LOGIN: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.washing = action.payload.washing;
    },
    ACTIVEADDRESS: (state, action) => {
      state.activeAddress = action.payload
    },
  },
});

export const { LOGIN,ACTIVEADDRESS } = userSlice.actions;
export default userSlice.reducer;

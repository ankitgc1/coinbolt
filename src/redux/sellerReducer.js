import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  userId: null,
  userapprove: "",
  inputRefralid: "",
  userrefralid: null,
  userdata: {},
  currentRefralid:''
};
export const sellerReducer = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    user: (state, action) => {
      // console.log("reducer run on regiister evet", action.payload);
      state.userId = action.payload;
    },
    approve: (state, action) => {
      // console.log("reducer approve", action.payload);
      state.userapprove = action.payload;
    },
    inputRefralid: (state, action) => {
      console.log("reducer refralid", action.payload);
      state.inputRefralid = action.payload;
    },
    currentRefralid: (state, action) => {
      console.log("currentRefralid currentRefralid>>>>>>>>>>>>>>", action.payload);
      state.currentRefralid = action.payload;
    },
  },
});

export const { user, approve, inputRefralid, currentRefralid } = sellerReducer.actions;
export default sellerReducer.reducer;

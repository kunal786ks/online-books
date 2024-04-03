import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "@/store/store";
import {
  addUserDetails,
  loginUserDetails,
  updateProfilePic,
} from "./user.action";

const initialState: userIntialInterface = {
  user: {
    id: "",
    userName: "",
    email: "",
  },
  token: "",
  userImage: "",
  loading: false,
  error: "",
};

export const userSlice: any = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addError: (state, { payload }) => {
      state.error = payload;
    },
    logoutUser: (state) => {
      state.user = {
        id: "",
        userName: "",
        email: "",
      };
      state.userImage="",
      (state.token = ""), (state.loading = false);
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserDetails.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(addUserDetails.fulfilled, (state, { payload }) => {
        state.user = payload.newUser;
        state.token = payload.token;
        state.userImage=payload.userImage;
        state.loading = false;
        state.error = {};
      })
      .addCase(addUserDetails.rejected, (state, { payload }: any) => {
        state.user = {
          id: "",
          userName: "",
          email: "",
        };
        state.loading = false;
        state.error = payload.message;
      })
      .addCase(loginUserDetails.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(loginUserDetails.fulfilled, (state, { payload }) => {
        state.user = payload.userResponse;
        state.token = payload.token;
        state.userImage=payload.userImage;
        state.loading = false;
        state.error = {};
      })
      .addCase(loginUserDetails.rejected, (state, { payload }: any) => {
        console.log(payload, "this is paylaod from solice");
        state.user = {
          id: "",
          userName: "",
          email: "",
        };
        state.loading = false;
        state.error = payload.message;
      })
      .addCase(updateProfilePic.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(updateProfilePic.fulfilled, (state, { payload }) => {
        state.userImage = payload?.existingUser?.userImage;
        state.loading = false;
        state.error = {};
      })
      .addCase(updateProfilePic.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload.message;
      });
  },
});

export const { logoutUser, addError } = userSlice.actions;

export const userDetailsSelector = (state: RootState) => state?.userReducer;

export default userSlice.reducer;

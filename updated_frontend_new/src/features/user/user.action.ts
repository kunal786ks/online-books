import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./user.type";
import { addUserApi, getUserApi } from "@/service/userService";

let error: errorResponseInterface = {
  statusCode: 404,
  message: "Network error,please try again",
};

export const addUserDetails = createAsyncThunk(
  ACTION_TYPE.add_user,
  async (payload:addUserInterface, thunkApi) => {
    try {
      const res=await addUserApi(payload)
      if(res.status===201){
        return res.data;
      }
    } catch (err: any) {
      if (err.response) {
        error.statusCode = err.response.status;
        error.message = err.response.data;
      }

      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);

export const loginUserDetails = createAsyncThunk(
  ACTION_TYPE.login_user,
  async (payload:getUserInterface, thunkApi) => {
    try {
        const res=await getUserApi(payload);
        if(res.status===200){
          return res.data;
        }
    } catch (err: any) {
      console.log()
      if (err.response) {
        error.statusCode = err.response.status;
        error.message = err.response.data;
      }

      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./user.type";
import { addUserApi, getUserApi, updateGenralInformationAPI, updateProfileApi } from "@/service/userService";

let error: errorResponseInterface = {
  statusCode: 404,
  message: "Network error,please try again",
};

export const addUserDetails = createAsyncThunk(
  ACTION_TYPE.add_user,
  async (payload: addUserInterface, thunkApi) => {
    try {
      const res = await addUserApi(payload)
      if (res.status === 201) {
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
  async (payload: getUserInterface, thunkApi) => {
    try {
      const res = await getUserApi(payload);
      if (res.status === 200) {
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


export const updateProfilePic = createAsyncThunk(
  ACTION_TYPE.update_pic,
  async (payload: updateProfileInterface, thunkApi) => {
    try {
      console.log(payload, "this is payloa din action cra");
      const res = await updateProfileApi(payload)
      console.log(res, "tjis is response in the action creator")
      if (res.status === 200) {
        return res.data;
      }
    } catch (err: any) {
      if (err.response) {
        error.statusCode = err.response.status;
        error.message = err.response.data || "Something went wrong";
      }

      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
)

export const updateGenralInfo = createAsyncThunk(
  ACTION_TYPE.update_genral_info,
  async (payload: updateInterface, thunkApi) => {
    try {
      const res=await updateGenralInformationAPI(payload);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err: any) {
      if (err.response) {
        error.statusCode = err.response.status;
        error.message = err.response.data || "Something went wrong";
      }

      return thunkApi.rejectWithValue({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
)
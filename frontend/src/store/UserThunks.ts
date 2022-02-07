import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserApi } from "api/UserApi";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload: any) => {
    return UserApi.create(payload);
  }
);

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return UserApi.fetch();
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id: string) => {
    return UserApi.fetchById(id);
  }
);

export const updateUserById = createAsyncThunk(
  "users/updateUserById",
  async ({ id, body }: any, thunkAPI) => {
    await UserApi.updateById(id, body);
    return thunkAPI.dispatch(fetchUsers());
  }
);

export const deleteUserById = createAsyncThunk(
  "users/deleteUserById",
  async (id: string, thunkAPI) => {
    await UserApi.deleteById(id);
    return thunkAPI.dispatch(fetchUsers());
  }
);

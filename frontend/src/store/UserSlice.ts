import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserApi } from "api/UserApi";

const InitialState = {
  users: [],
  userDetail: {},
  isLoading: false,
};

const userSlice = createSlice({
  initialState: InitialState,
  name: "users",
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(createUser.fulfilled, () => {
      fetchUsers();
    });
  },
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (action, thunkAPI) => {
    const response = await UserApi.fetch();
    return response;
  }
);

export const fetchById = createAsyncThunk(
  "users/fetchUserById",
  async (id: string, thunkAPI) => {
    const response = await UserApi.fetchById(id);
    return response;
  }
);

export const deleteById = createAsyncThunk(
  "users/deleteUserById",
  async (action, thunkAPI) => {
    const response = await UserApi.fetch();
    return response;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload: any) => {
    await UserApi.create(payload);
  }
);

export const { setUsers } = userSlice.actions;

export const UserReducer = userSlice.reducer;

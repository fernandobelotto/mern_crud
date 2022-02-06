import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

export const User = mongoose.model("User", userSchema);

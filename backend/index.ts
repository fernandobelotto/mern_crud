import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { UserRouter } from "./src/controllers";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/users", UserRouter);

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
  } catch (e) {
    console.error("error connection with mongo", e);
  }
  app.listen(8000, () => {
    console.log("The application is listening on http://localhost:8000!");
  });
}

main();

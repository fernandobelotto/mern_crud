import bodyParser from "body-parser";

import cors from "cors";

import express from "express";
import { UserRouter } from "./controllers";
import { Database } from "./database";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/users", UserRouter);

Database.connect();

app.listen(8000, () => {
  console.log("The application is listening on http://localhost:8000!");
});

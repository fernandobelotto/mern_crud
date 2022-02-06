import chalk from "chalk";
import mongoose from "mongoose";

export class Database {
  static async connect() {
    console.log(chalk.blue("connection to database"));
    try {
      await mongoose.connect("mongodb://localhost:27017/test");
      console.log(chalk.green("database connect"));
    } catch (e) {
      console.log(chalk.red("error connection with mongo"));
    }
  }
}

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongodb_connection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("connected");
  } catch (e) {
    console.log("Connection Failed", e);
  }
};

export default mongodb_connection;

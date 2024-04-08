import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose
      .connect(process.env.URI_DB)
      .then(() => console.log("Connected!"));
  } catch (e) {
    console.log("Connection DB failed!");
  }
};

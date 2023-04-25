import mongoose from "mongoose";

export default async function disconnect() {
  await mongoose.disconnect();
  console.log("Desconectado do MongoDB");
}
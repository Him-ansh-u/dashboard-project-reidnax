import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  month: { type: String, required: true },
  website: { type: Number, required: true },
  tools: { type: Number, required: true },
  bugFixes: { type: Number, required: true },
});
const Data = mongoose.model("Data", dataSchema);
export default Data;

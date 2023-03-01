import mongoose, { Schema, model } from "mongoose";

export interface ReviewModel {
  username: string;
  user_id: string;
  message: string;
  parent_message_id: string;
}

const schema = new Schema<ReviewModel>({
  username: { type: String, required: true },
  user_id: { type: String, required: true },
  message: { type: String, required: true },
  parent_message_id: { type: String, required: true },
});

export default model<ReviewModel>("Review", schema);

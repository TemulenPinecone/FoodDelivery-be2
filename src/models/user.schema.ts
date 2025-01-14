import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  age: Number,
  createdAt: Date,
  updatedAt: Date,
});

export const UserModel = model("User", UserSchema);

import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    abilities: {
      type: [String],
      required: false
    },
    created_projects: {
      type: [String],
      required: false
    },
    contact_info: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);

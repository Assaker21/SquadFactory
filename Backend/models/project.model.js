import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    owner: {
      type: String,
      required: true
    },
    members: {
      type: [String],
      required: false
    },
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    roles: {
      type: [String],
      required: false
    },
    imgs: {
      type: [String],
      required: false
    },
    technology: {
      type: [String],
      required: false
    },
    completion: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Project", projectSchema);

import mongoose from "mongoose";

import { random_letters } from "../utils.js";

const URL = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    redirect_to: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

URL.pre("save", function (next) {
  this.slug = random_letters(10);

  next();
});

export default mongoose.model("URL", URL);

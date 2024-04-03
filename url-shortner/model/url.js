import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: [{ timestamp: { type: Number, default: Date.now() } }],
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);

export default Url;

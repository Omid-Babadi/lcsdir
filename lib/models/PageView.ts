import mongoose from "mongoose";

const pageViewSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      maxlength: 300,
      index: true,
    },
    visitorId: {
      type: String,
      required: true,
      maxlength: 100,
      index: true,
    },
    sessionId: {
      type: String,
      required: true,
      maxlength: 100,
    },
    referrer: {
      type: String,
      maxlength: 500,
      default: "",
    },
    dedupKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true },
);

pageViewSchema.index({ createdAt: -1, path: 1 });
pageViewSchema.index({ createdAt: -1, visitorId: 1 });

export default mongoose.models.PageView ?? mongoose.model("PageView", pageViewSchema);

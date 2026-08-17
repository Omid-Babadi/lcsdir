import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    phone: { type: String, trim: true, maxlength: 50, default: "" },
    service: { type: String, trim: true, maxlength: 160, default: "" },
    preferredDate: { type: String, trim: true, maxlength: 100, default: "" },
    notes: { type: String, trim: true, maxlength: 4000, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "confirmed", "completed", "archived"],
      default: "new",
      index: true,
    },
    telegramStatus: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    telegramError: { type: String, maxlength: 500, default: "" },
  },
  { timestamps: true },
);

bookingSchema.index({ createdAt: -1 });

export default mongoose.models.Booking ?? mongoose.model("Booking", bookingSchema);

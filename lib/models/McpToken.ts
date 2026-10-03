import mongoose from "mongoose";

const mcpTokenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    tokenHash: {
      type: String,
      required: true,
      unique: true,
      select: false,
    },
    tokenPrefix: {
      type: String,
      required: true,
      trim: true,
    },
    lastUsedAt: {
      type: Date,
      default: null,
    },
    revokedAt: {
      type: Date,
      default: null,
      index: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.McpToken || mongoose.model("McpToken", mcpTokenSchema);

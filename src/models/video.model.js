const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      default: "",
      required: true,
    },
  },
  { timestamps: true }
);

const videoModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalViews: {
      type: Number,
      required: true,
      default: 0,
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
    genere: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Video = model("Video", videoModel);

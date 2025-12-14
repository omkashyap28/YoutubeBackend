const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    name: {
      type: String,
      requireD: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    token: {
      type: String,
      required: true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
  }
  next();
});
userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: precess.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.method.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: precess.env.REFRESH_TOKEN_EXPIRY }
  );
};

module.export = model("User", userSchema);

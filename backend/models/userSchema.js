/*
1.it's for schema for the backend
here only 2 1.userdetail 2.tweetdetail
2.import mongoose and then call new mongoose .Schema iinside which each  attribute and its type or sketched
3.export the mongoose.Schema as user name
*/

import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    bookmarks: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true } //to know the time its modified
);
export const User = mongoose.model("User", userSchema);

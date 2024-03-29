import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Post = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  likes: { type: Number, required: false, default: 0 },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
const PostModel = model("Post", Post);
export default PostModel;

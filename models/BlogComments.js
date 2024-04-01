import mongoose from "mongoose";

const BlogCommetnsSchema = new mongoose.Schema(
  {
    userId: String,
    comment:String,
    blogId:String,
  },
  { timestamps: true }
);

const Manga = mongoose.model("BlogComments", BlogCommetns);
export default BlogComments;
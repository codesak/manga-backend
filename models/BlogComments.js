import mongoose from "mongoose";

const BlogCommentsSchema = new mongoose.Schema(
  {
    userId: String,
    comment:String,
    blogId:String,
    userName:String,
    profilePic:String,
  },
  { timestamps: true }
);

const BlogComments = mongoose.model("BlogComments", BlogCommentsSchema);
export default BlogComments;
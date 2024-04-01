import mongoose from "mongoose";

const MangaListSchema = new mongoose.Schema(
  {
    mangaTitle: String,
    mangaId:String,
    poster:String,
    realeseYear:Number,
    status:String,
    demographic:String,
    summary:String

  },
  { timestamps: true }
);

const MangaList = mongoose.model("MangaList", MangaListSchema);
export default MangaList;
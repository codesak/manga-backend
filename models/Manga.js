import mongoose from "mongoose";

const MangaSchema = new mongoose.Schema(
  {
    mangaTitle: String,
    mangaId:String,
    chapters:[
      {
        chapterNo:Number,
        chapterName:String,
        pages:[
          {
            pageNo:Number,
            image:String
          }
        ]
      }
    ]
  },
  { timestamps: true }
);

const Manga = mongoose.model("Manga", MangaSchema);
export default Manga;
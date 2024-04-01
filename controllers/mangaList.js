import MangaList from "../models/MangaList.js";


export const getMangaList = async (req, res) => {
    try {
        const { mangaId } = req.params
        console.log(mangaId);
        const manga = await MangaList.findOne({ mangaId:`${mangaId}` });
    
    res.status(201).json({ message: 'Manga Find', manga })
  } catch (error) {
    res.status(500).json({ message: 'Error finding manga' })
  }
}
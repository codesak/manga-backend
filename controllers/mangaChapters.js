import mongoose from 'mongoose'
import Manga from '../models/Manga.js'

export const postManga = async (req, res) => {
  try {
    const { animeTitle, animePoster, description, chapters } = req.body
    const newAnime = new Anime({
      animeTitle,
      animePoster,
      description,
      chapters,
    })
    await newAnime.save()
    res.status(201).json({ message: 'Anime saved successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error saving anime' })
  }
}

export const getManga = async (req, res) => {
    try {
        const { mangaId } = req.params
        console.log(mangaId);
        const manga = await Manga.findOne({ mangaId:`${mangaId}` });
    
    res.status(201).json({ message: 'Manga Find', manga })
  } catch (error) {
    res.status(500).json({ message: 'Error finding manga' })
  }
}

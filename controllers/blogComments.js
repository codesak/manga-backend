
export const blogComments = async (req, res) => {
    try {
        const { blogId, userId, comment } = req.body
        const data = {
            blogId,
            userId,
            comment
        }
        const result = await collection.insertOne(data);
    
    res.status(201).json({ message: 'Comment Saved', data })
  } catch (error) {
    res.status(500).json({ message: 'Error saving comment' })
  }
}
import BlogComments from '../models/BlogComments.js'

export const blogComments = async (req, res) => {
  try {
    const { blogId, userId, comment, userName, profilePic } = req.body
    const newComment = new BlogComments({
      blogId,
      userId,
      comment,
      userName,
      profilePic,
    })
    await newComment.save()

    res.status(201).json({ message: 'Comment Saved' })
} catch (error) {
      console.log(error)
    res.status(500).json({ message: 'Error saving comment' })
  }
}

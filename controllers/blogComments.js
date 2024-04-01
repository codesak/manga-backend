import BlogComments from '../models/BlogComments.js'

export const postBlogComments = async (req, res) => {
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

export const getBlogComments = async (req, res) => {
    console.log(req.params.id);
    try {
        const  blogId  = req?.params?.id
        console.log(blogId);
      const comments = await BlogComments.find({ blogId: blogId })
  
      res.status(201).json({comments })
  } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Error saving comment' })
    }
  }

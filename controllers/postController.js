const {post} = require('../models/index')
 const createPost = async (req,res) => {
    const {title, description, like, comment, share} = req.body

    try{
        const newPost = await post.create({title, description, like, comment, share})

        return res.json(newPost)
    }
    catch(error){
        console.log(error)
        return res.status(500)
    }
}

const getPosts = async (req,res) => {

    try{
        const getposts = await post.findAll()
        return res.json(getposts)
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {
    createPost, getPosts
}

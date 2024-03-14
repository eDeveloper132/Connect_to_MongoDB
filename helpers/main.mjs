import connectDB from '../db/main.mjs'
import Post from "../Schema/main.mjs"

// await connectDB()

const createPost = async () => {
    console.log("creating post");
    const post = new Post({
        author: "Mohammad Shabbir",
        content: "Father",
        title: "Shabbir"
    })
    // post.author = "Asad"
    await post.save()
    // const post = await Post.create({
    //     author: "Obiad Muneer",
    //     content: "This is my first post",
    //     title: "This is title"
    // })

}

const readPost = async () => {
    // const data = await Post.find({})
    // const data = await Post.find({ author: "Obiad Muneer" })
    // const data = await Post.find({ _id: "65eede7c41db9238e25adcc4" })
    const data = await Post.findById({ _id: "65f2eddce5a34ac77a22c2f2" })

    console.log(data);
}

const updatePost = async () => {
    const post = await Post.findByIdAndUpdate("65f36aefc057bcee9ab095c1", {
        author: 'Mohammad Shabbir'
    },{new:true})
    console.log(post);
}

const deletePost = async() =>{
    const post = await Post.findByIdAndDelete("65f36aefc057bcee9ab095c1")
    // const post = await Post.deleteMany({})
    console.log(post);
}

const main = async () => {
    await connectDB()
    // createPost()
    // updatePost()
    deletePost()
    // readPost()
    

}
// main()
export {createPost,readPost,updatePost,deletePost,main}
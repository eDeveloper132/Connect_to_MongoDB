import express from "express";
import PostModel from "../Schema/main.mjs";
import { createPost, readPost, updatePost, deletePost, main } from "../helpers/main.mjs";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await PostModel.find({});
        res.send({
            data: posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong"
        })
    }
})
main();

export default router;
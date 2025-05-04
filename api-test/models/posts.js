import mongoose from "mongoose";
import { User } from "./user.js"; // used as a reference in this schema

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
});
export let Post = mongoose.model('Post', postSchema);
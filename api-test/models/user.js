import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required'],
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true,'Email already exists'],
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    }
});
 export let User = mongoose.model('User',userSchema);
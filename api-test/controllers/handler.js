import {Router} from 'express'
import {User} from '../models/user.js';
import {Post} from '../models/posts.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {isauthenticated} from '../middlewares/auth.js';
import multer from 'multer';
import path from 'path';

let router = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
      
    }
  });
  const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept file
    } else {
      cb(new Error('Invalid file type. Only PNG, JPEG, and JPG are allowed.'), false);
    }
  };
  
  const upload = multer({ storage ,fileFilter})

const maxage = 3 * 24 * 60 * 60;
function gentoken(id){
    return jwt.sign({id},'my-secret-key', {expiresIn: maxage}); }


// Middleware to check if user is authenticated
async function login(email, password, req, res) {
    
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Please Check your Email'});
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Incorrect Password'});
        }
        res.cookie('jwt', gentoken(user._id), {
            httpOnly: true,
            maxAge: maxage * 1000,
        });

        res.status(200).json({message: `Login successful welcome ${user.name}`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


async function getuser(req, res) {
    try {
        let user = await User.findById(req.curruser);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        return user
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();

        res.cookie('jwt', gentoken(user._id), {
            httpOnly: true,
            maxAge: maxage * 1000,
        });
        res.status(201).json({message: `User ${name} registered with email: ${email} successfully and userID is ${user._id}`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.route('/posts')
.post(upload.single('image'),isauthenticated, async (req, res) => {
    const {title, content} = req.body;
    const fileinfo = req.file;
    let user= await getuser(req, res);
    try {
        const post = new Post({
            title,
            content,
            image: fileinfo.path,
            author : user._id,
        });
        await post.save();
        res.status(201).json({message: `Post created successfully by ${user.name}`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
.get(isauthenticated, async (req,res)=>{
    let curruser = await User.findById(req.curruser);
    try{
        const allposts = await Post.find({}).populate('author');
        res.status(201).json({messgae:`welcome ${curruser.name}`,allposts});
    }
    catch (err){
        res.status(500).json({error:err.message});
    }
});

router.get('/users',isauthenticated, async (req,res)=>{
    let curruser = await getuser(req, res);
    let users = await User.find({});
    res.status(200).json({message:`welcome ${curruser.name}`,users});
});

router.post('/login', async (req, res) => {
    let {email,password} = req.body;
        login(email,password,req, res);
});

router.get('/logout',isauthenticated,(req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({message: 'Logout successful'});
});

export default router;
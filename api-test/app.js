import express from 'express';
import mongoose from 'mongoose';
import router from './controllers/handler.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected with MongoDB'))
  .then(() => {
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err)=>{
    console.log(err);
   });

app.use(router);

app.use((err, req, res, next) => {
  if (err.message.includes('Invalid file type')) {
    return res.status(400).json({ error: err.message });
  }

  // fallback for any other error
  res.status(500).json({ error: 'Something went wrong' });
});

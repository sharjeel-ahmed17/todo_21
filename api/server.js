import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 5000;


// middleware
app.use(express.json());
// connected db
mongoose.connect('mongodb+srv://xaxigog303:779WmXOXp6RAhNam@cluster0.p68tn.mongodb.net/').then(()=> console.log('db connected')
).catch((err)=> console.log('unavalble to connect db')
)

//routes 
app.get("/", async (req, res) => {
  res.send('Hello World');
});

app.get('/users', async (req , res)=>{
res.json({
    name : "sharjeel ",
    age : 23,
    city : "cairo"
})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 
});

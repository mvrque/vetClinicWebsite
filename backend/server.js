const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));

const NewsModule = require('./models/News')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://tatari1:loomakliinik123@cluster0.ompkdjm.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }
)

app.post('/insert', async (req, res) => {

  const newsHeader = req.body.newsHeader
  const newsDescription = req.body.newsDescription
  const newsDate = ""

  const news = new NewsModule({ newsHeader: newsHeader, newsDate: "",newsDescription: newsDescription});
  
  try {
    await news.save();
    res.send("inserted data")
  } catch (err) {
    console.log(err)
  }
})

app.get('/read', async (req, res) => {

  NewsModule.find({}, (err, result) => {
    if(err){
      res.send(err)
    }

    res.send(result)
  })
})

app.delete("/delete/:id", async (req, res) =>{
  const id = req.params.id;
  
  await NewsModule.findByIdAndRemove(id).exec();
  res.send('deleted')
})
  
app.listen(3001, () => {
  console.log("Running on 3001. Go CATCH ME")
})
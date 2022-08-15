const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

const NewsModule = require('./models/News')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://tatari1:loomakliinik123@cluster0.zklfwzs.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }
)

app.post('/insert', async (req, res) => {

  const newsHeader = req.body.newsHeader
  const newsDescription = req.body.newsDescription

  const news = new NewsModule({ newsHeader: newsHeader, newsDescription: newsDescription});
  
  try {
    await news.save();
    res.send("inserted data")
  } catch (err) {
    console.log(err)
  }
})

  
app.listen(3001, () => {
  console.log("Running on 3001. Go CATCH ME")
})

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();

const NewsModule = require('./models/News')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://tatari1:loomakliinik123@cluster0.ompkdjm.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }
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
//app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
// });
  



app.listen(process.env.PORT || 5050, () => {
  console.log("Running on 5050. Go CATCH ME")
})
const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    newsHeader: {
        type: String,
        required: true,
    },
    newsDate: {
        type:String,
    },
    newsDescription: {
        type: String,
        required:true,
    },
});


const News = mongoose.model("News", NewsSchema);
module.exports = News
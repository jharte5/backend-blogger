const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{String, uniquers: true},
    author:{String},
    subject:{String},
    article:{String},
    objectId:{String, unique: true}
});

module.exports = mongoose.model('Blog', BlogSchema)
const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    name : String,
    id : Number,
    Content: {
        type :String 
        
    },
    comments:String,
    Date:{
        type : Date,
        default:Date.now
    }
})
const post = mongoose.model('post',postSchema);

module.exports = post
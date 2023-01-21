const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({

    _id:ObjectId,
    customer:String,
    review:String

})
module.exports = mongoose.model( 'review', reviewSchema )
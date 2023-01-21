require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const password = process.env.PASSWORD
const mongoURL = `mongodb+srv://Rookie-117:${password}@mrhqlvl5m5.6atiac9.mongodb.net/?retryWrites=true&w=majority`
const mockReviews = require('./Models/reviewModel')

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log('Green light DB');
    })
    .catch(() => {
        console.log('Red light DB');
    });

const getReviews = async (req, res) => {
    const reviews = await mockReviews.find()
    res.json(reviews);
};

console.log(getReviews)
exports.getReviews = getReviews
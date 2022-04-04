const mongoose = require ('mongoose')
const Schema = mongoose.Schema


// The shape of the blog
const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    fruits:[ {
        type: Schema.Types.ObjectId,
        required: true
    }]
}, {timestamps: true})

// Capture the blog Shape/model
const personModel = mongoose.model("FruitPeople", personSchema)


// The shape of the comment
const fruitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Fruits'
    }
}, {timestamps: true})


// Capture the comment shape/model
const fruitModel = mongoose.model('fruits', fruitSchema)

module.exports = {
    personModel,
    fruitModel
}
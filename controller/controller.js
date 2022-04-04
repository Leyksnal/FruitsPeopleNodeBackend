const {personModel, fruitModel} = require('../model/model')

// Create person
const postPerson = async (req, res)=>{
    try {

        // Capturing the person shape
        const data ={
            name: req.body.name,
            age: req.body.age
        }

        // The create function to adding persons
        const who = await personModel.create ( data )
        res.status(201).json({
            status: `Success`,
            data: who
        })
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Posting a fruit under a person
const postfruit = async (req, res) =>{
    try {

        // Capturing a person id
        const who = await personModel.findById( req.params.id )
        // Instatiate from the fruit
        const fruit = new fruitModel(req.body)
        // Tighing the fruit to a person (id)
        fruit.person = person
        // save the fruit in the basket
        fruit.save()
        // Pushing the fruit to the targeted person(id)
        who.fruits.push(fruit)
        // Save the person
        who.save()
        res.status(200).json({
            status: `Success`,
            data: {
                fruit
            }
        })

        
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Read all the persons
const readPeople = async (req, res) =>{
    try {

        // Find method to read all persons
        const who = await personModel.find()
        res.status(200).json({
            status: `Everyone`,
            data: {
                who
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Reading fruits
const readfruits = async (req, res) =>{
    try {


        // Capture each of the person and populate the fruit tied to the person
        const who = await personModel.findById( req.params.Id ).populate('fruits')
        res.status(200).json({
            status: `These are fruits`,
            data: {
                who
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Read one person
const onePerson = async (req, res) =>{
    try {

        // Capturing one person with the method
        const who = await personModel.findById( req.params.id )
        res.status(200).json({
            status: `Person`,
            data: who
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Update one person
const updatePerson = async (req, res) =>{
    try {


        // Capturing the shape of the person
        const data ={
            name: req.body.name,
            age: req.body.age
        }


        // Method capture the person id and update
        const who = await personModel.findByIdAndUpdate( req.params.id, data )
        res.status(200).json({
            status: `Updated`,
            data: {
                who
            }
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}


// Delete one person
const deleteperson = async (req, res) =>{
    try {


        // Capture the person id
        const who = await personModel.findByIdAndRemove( req.params.id )
        res.status(200).json({
            status: `Removed`
        })
        
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}

module.exports = {
    postPerson,
    postfruit,
    readPeople,
    readfruits,
    onePerson,
    updatePerson,
    deleteperson,
}
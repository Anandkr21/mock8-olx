const express = require('express')
const { productModel } = require('../model/productModel')

require('dotenv').config()

const productRouter = express.Router()

// adding dadta from this route
productRouter.post('/class', async (req, res) => {
    try {
        const { name, description, category, image, location, postedAt, price } = req.body;
        const addItem = new productModel({ name, description, category, image, location, postedAt, price });
        await addItem.save();
        res.status(200).send({
            status: true,
            msg: 'Your Item has been added to the OLX-Classified List.'
        })
    } catch {
        res.status(404).send({
            status: false,
            msg: 'Error in adding a new item to the list.'
        })
    }
})

// updating data from this route
productRouter.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await productModel.findByIdAndUpdate({ _id: id }, data)
        res.status(200).send({
            msg: "updated"
        })
    } catch (error) {
        res.send({
            msg: "error"
        })
    }
})


// deleting data from this route
productRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await productModel.findByIdAndDelete({ _id: id })
        res.send('data deleted')
    } catch (error) {
        res.send('unable to delete. error')
    }
})

// getting all data here
productRouter.get('/alldata', async (req, res) => {
    try {
        const data = await productModel.find()
        res.status(200).send({
            msg: 'all data is here',
            data: data
        })
    } catch (error) {

    }
})


module.exports = { productRouter }
const express = require('express')
const { userModel } = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userRouter = express.Router()

// user register route
userRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const searchUser = await userModel.find({ email })
        if (searchUser.length >= 1) {
            res.status(409).send({
                msg: 'User already registered.'
            })
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                const user = new userModel({ name, email, password: hash })
                await user.save()
                res.status(200).send({
                    msg: "Registered Successfully!"
                })
            })
        }
    } catch (error) {
        res.status(404).send({
            msg: 'Something error'
        })
    }
})


userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userMail = await userModel.find({ email })
        if (userMail.length >= 1) {
            bcrypt.compare(password, userMail[0].password, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ "user -id": userMail[0]._id }, process.env.secret_key)
                    res.status(200).send({
                        msg: "Login Successful",
                        token: token
                    })
                } else {
                    res.status(404).send({
                        msg: "Wrong email/password"
                    })
                }
            })
        }
    } catch (error) {
        res.status.send({
            msg: 'something error'
        })
    }
})
module.exports = { userRouter }
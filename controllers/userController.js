const jwt = require('jsonwebtoken')
const {user} = require('../models/index')

const createUser = async (req,res) => {
    const {name, email, password} = req.body

    try{
        const newUser = await user.create({name, email, password})
        const token = jwt.sign({email : newUser.email}, 'test', {expiresIn : '1hr'})
        return res.status(200).json({newUser , token})
        // return res.json(newUser)
    }
    catch(error){
        console.log(error)
        return res.status(500)
    }
}

const getUsers = async (req,res) => {

    try{
        const getusers = await user.findAll()
        return res.json(getusers)
    }
    catch(err){
        console.log(err)
    }
}

const getUser = async (req,res) => {

    const uuid = req.params.uuid

    try{
        const getuser = await user.findOne({
            where : {uuid}  
        })
        return res.json(getuser)
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {createUser, getUsers, getUser}
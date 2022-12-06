const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const List = require('./models/DataList.js')

app.use(express.json())
app.use(cors())

//                             Post route
//                             get route grabbing all data
  app.post('/list', (req, res) => {
   console.log(req)
    List.create(req.body, (err, createdList) => {
      // console.log(req.body)
      res.json(createdList)
    })
  })
  
                            //get route grabbing all data
  app.get('/list', (req, res) => {
    List.find({}, (err, foundList) => {
      res.json(foundList)
    })
  })
  
                            //delete route..
  app.delete('/list/:id', (req, res) => {
    List.findByIdAndRemove(req.params.id, (err, deletedList) => {
      res.json(deletedList)
    })
  })
  
                            //put route
  app.put('/list/:id', (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedList) => {
      res.json(updatedList)
    })
  })

app.listen(3000, () => {
    console.log('listening...')
 })
 
 mongoose.connect('mongodb://localhost:27017/SongList')
 mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
 })

 //Run in terminal to start. nodemon and npm start
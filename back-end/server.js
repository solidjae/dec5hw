const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const List = require('./models/DataList.js')

app.use(express.json())
app.use(cors())

                            //Post route//
app.post('/List', (req, res) => {
    console.log(req)
    List.create(req.body, (err, createdList) => {
      console.log(req.body)
      res.json(createdList)
    })
  })
  
                            //get route grabbing all data
//   app.get('/people', (req, res) => {
//     People.find({}, (err, foundPeople) => {
//       res.json(foundPeople)
//     })
//   })
  
                            //delete route..
//   app.delete('/people/:id', (req, res) => {
//     People.findByIdAndRemove(req.params.id, (err, deletedPerson) => {
//       res.json(deletedPerson)
//     })
//   })
  
                            //put route
//   app.put('/people/:id', (req, res) => {
//     People.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPerson) => {
//       res.json(updatedPerson)
//     })
//   })






app.listen(3000, () => {
    console.log('listening...')
 })
 
 
 mongoose.connect('mongodb://localhost:27017/SongList')
 mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
 })

 

 //Run in terminal to start. nodemon and npm start
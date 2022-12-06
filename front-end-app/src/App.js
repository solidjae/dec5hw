// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import ListSong from './components/ListFrontend'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  // const [people, setPeople] = useState([])

  //Get
  // const getPeople = () => {
  //    axios.get('http://localhost:3000/people')
  //    .then((response) => setPeople(response.data), (err) => console.log(err))
  //    .catch((error) => console.log(error))
  // }

  //Create
  // const handleCreate = (data) => {
  //    axios.post('http://localhost:3000/people', data)
  //    .then((response) => {
  //       console.log(response)
  //       getPeople()
  //    })
  // }

  //Edit
//   const handleEdit = (data) => {
//     axios.put('http://localhost:3000/people/' + data._id, data)
//     .then((response) => {
//        console.log(response)
//        getPeople()
//     })
//  }

 //Delete
  // const handleDelete = (event) => {
  //    axios.delete('http://localhost:3000/people/' + event.target.value)
  //    .then((response) => {
  //     getPeople()
  //    })
  // }

  // useEffect(() => {
  //    getPeople()
  // }, [])



  return (
    <>
      <h1>Hello, Am I working</h1>
    </>
  );
}

export default App;

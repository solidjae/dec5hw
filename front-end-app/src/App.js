import {useState, useEffect} from 'react'
import axios from 'axios'


import './App.css'


import Songs from './components/Songs'
import Add from './components/Add'
import Edit from './components/Edit'


function App() {

   const [display, setDisplay] = useState(false)
   const [songs, setSongs] = useState([])

  //Get
  const getSongs = () => {
     axios.get('http://localhost:3000/list')
     .then((response) => setSongs(response.data), (err) => console.log(err))
     .catch((error) => console.log(error))
  }

  //Create
  const handleCreate = (data) => {
     axios.post('http://localhost:3000/list', data)
     .then((response) => {
        setSongs([...songs, response.data])
     })
  }

  //Edit
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/list/' + data._id, data)
    .then((response) => {
       let newSongs = songs.map((song) => {
        return song._id !== data._id ? song : data
       })
       setSongs(newSongs)
    })
 }

 //Delete
  const handleDelete = (event) => {
     axios.delete('http://localhost:3000/list/' + event.target.value)
     .then((response) => {
      let newSongs = songs.filter((songs) => {
        return songs._id !== response._id
       })
      setSongs(newSongs)
     })
  }

  useEffect(() => {
     getSongs()
  }, [])



  return (
    <>
      <h1>Songs List</h1>
      <Add handleCreate = {handleCreate}/>
      {songs.map((song) => {
        return (
          <>
            <Songs songs = {song}/>
            <Edit songs = {song} handleEdit = {handleEdit}/>
            <button onClick={()=> {handleDelete(song)}}>Delete</button>
         </>
        )
      })}
   </>
  );
}

export default App;


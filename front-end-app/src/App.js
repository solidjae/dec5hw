import {useState, useEffect} from 'react'
import axios from 'axios'

import Songs from './components/Songs'
import Add from './components/Add'
import Edit from './components/Edit'


function App() {

  const [songs, setSongs] = useState([])

  //Get
  const getSongs = () => {
     axios.get('http://localhost:3000/list')
     .then((response) => setSongs(response.data), (err) => console.log(err))
     .catch((error) => console.log(error))
  }
  console.log(songs)
  //Create
  const handleCreate = (data) => {
     axios.post('http://localhost:3000/list', data)
     .then((response) => {
        console.log(response)
        setSongs([...songs, response.data])
     })
  }

  //Edit
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/list/' + data._id, data)
    .then((response) => {
       console.log(response)
       let newSongs = (songs.map((song) => {
        return songs._id !== data._id ? song : data
       }))
       setSongs(newSongs)
    })
 }

 //Delete
  const handleDelete = (deletedSong) => {
     axios.delete('http://localhost:3000/list/' + deletedSong._id)
     .then((response) => {
      let newSongs = songs.filter((song) => {
        return song._id !== response._id
       })
      setSongs(newSongs)
      getSongs()
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
            <Songs song = {song}/>
            <Edit song = {song} handleEdit = {handleEdit}/>
            <button onClick={()=> {handleDelete(song)}}>Delete</button>
          </>
        )
      })}

    </>
  );
}

export default App;

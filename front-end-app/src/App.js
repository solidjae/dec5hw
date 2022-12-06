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
    <div class="container">
      
      <div class="header">
      <header>Songs List</header>
      </div>

      <button class = "btn btn-primary" onClick={() => setDisplay(!display)}>Add new Song</button>

      {display ? <Add handleCreate = {handleCreate}/> : null}

      {songs.map((song) => {
        return (
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <Songs song = {song}/>
            <Edit song = {song} handleEdit = {handleEdit}/>
            <button onClick={()=> {handleDelete(song)}}>Delete</button>
            
          </div>
        )
      })}
    </div>
  );
}

export default App;

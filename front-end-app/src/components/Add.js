import {useState} from 'react'

const Add = (props) => {
    const [songs, setSongs] = useState({name: '', artist: '', link: ''})
    
    const handleChange = (event) => {
        setSongs({...songs, [event.target.name]: event.target.value} )
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(songs)
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name'onChange={handleChange}/> 

            <br></br>

            <label htmlFor='age'>Age:</label>
            <input type='number' name='age' onChange={handleChange}/>
            <input type='submit'/>
        </form>
    )
}
export default Add
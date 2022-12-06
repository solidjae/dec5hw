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

            <br/>
            
            <label htmlFor='artist'>Artist:</label>
            <input type='text' name='artist' onChange={handleChange}/>

            <br/>

            <label htmlFor='link'>Link:</label>
            <input type='text' name='link' onChange={handleChange}/>

            <input type='submit'/>
        </form>
    )
}

export default Add

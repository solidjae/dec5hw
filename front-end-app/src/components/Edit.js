import {useState, useEffect} from 'react'

    const Edit = (props) => {
        const [songs, setSongs] = useState({...props.song})

        const handleChange = (event) => {
            setSongs({...songs, [event.target.name]: event.target.value})
            console.log(songs)

        }
        const handleSubmit = (event) => {
            event.preventDefault()
            props.handleEdit(songs)
        }

        return (
            <details>
                <summary>Edit song</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={handleChange} value={songs.name}/>
                    <br/>
                    <br/>
                    <label htmlFor='artist'>Artist:</label>
                    <input type='text' name='artist' onChange={handleChange} value={songs.artist}/>
                    
                    <br/>
                    <label htmlFor='link'>Link:</label>
                    <input type='text' name='link' onChange={handleChange} value={songs.link}/>
                    <br/>
                    <input class='submit1' type='submit'/>
                    <br/>
                </form>
            </details>
        )
    }

export default Edit
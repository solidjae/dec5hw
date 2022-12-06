import {useState} from 'react'

const Songs = (props) => {

    return(
        <>
            <h3>Name: {props.songs.name} </h3>
            <h3>Artist: {props.songs.artist}</h3>
            <h3>Link: {props.songs.link}</h3>
        </>
    )
}



export default Songs

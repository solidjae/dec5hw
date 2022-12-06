const Songs = (props) => {

    return(
        <>
            <h3>Name: {props.song.name} </h3>
            <h3>Artist: {props.song.artist}</h3>
            <h3>Link: {props.song.link}</h3>
        </>
    )
}



export default Songs
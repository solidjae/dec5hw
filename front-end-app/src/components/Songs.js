const Songs = (props) => {

    return(
        <>
            <h3>Name: {props.song.name} </h3>
            <h3>Artist: {props.song.artist}</h3>
            <a href={props.song.link}>Link</a>
        </>
    )
}



export default Songs
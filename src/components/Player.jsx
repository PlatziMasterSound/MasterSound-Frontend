import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

//import '../styles/componentsStyles/Player.scss'

const Player = ({ data }) => {
    const playing = useSelector(state => state.songReducer.playing)
    
    const [ song, setSong] = useState(playing);
    console.log(song);
    
    useEffect(() => {
        setSong()
      }, [playing]);
      

    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })
    return(
        <section className='Player__container'>
            <div className='PlayerAlbum__info'>
                <img className='PlayerAlbum__cover' src={data.cover_image_url} alt='Album Cover' />
                    <div className='PlayerAlbum__TextSection'>
                        <p className='PlayerAlbum__ArtistName'>{nameArtists}</p>
                        <p className='PlayerAlbum__AlbumName'>{data.album_name}</p>
                    </div>
            </div>
            
            <audio className="Player__Style" controls >
                <source src={playing} type="audio/mpeg" />
            </audio>
        </section>
    )
}

export default Player;
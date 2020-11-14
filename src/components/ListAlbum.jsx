import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/componentsStyles/ListAlbum.scss'
import HeartLike from '../components/HeartLike'
import { setPlaying } from '../actions/songActions'
import { setFavorite } from '../actions/favoriteActions'
//********  Icons  **********//
import { DownloadItemsIcon, ShareIcon, PlusIcon } 

from '../components/Icons';


const ListAlbum = (props) => {
    const dispatch = useDispatch()

    function setPlayingSong () {
        dispatch(setPlaying(props.data.sound_url))
    }
    function setFavoriteSong () {
        dispatch(setFavorite(props.data.song_id))
    }

    return (
        <Fragment>
            <section className='listAlbum'>
                <p className='listAlbum__Number'>{props.data.order_number}</p> 
                <div onClick={setFavoriteSong} className='listAlbum__Favourite'>
                    <HeartLike />
                </div>
                <button className='listAlbum__Plus'>
                    {<PlusIcon />}
                </button>
                <div onClick={setPlayingSong} className='listAlbum__Song'>{props.data.song_name}</div>
                <p className='listAlbum__Reproductions' >{props.data.played_song_number}</p>
                <p className='listAlbum__Time'>{props.data.duration}</p>
                <button className='listAlbum__Download'>
                    {<DownloadItemsIcon />}
                </button>
                <button className='listAlbum__Share'>
                    <ShareIcon />
                </button>
                <button className='listAlbum__Points'>...</button>
            </section>
        </Fragment>
    );
}
                    
 
export default ListAlbum;
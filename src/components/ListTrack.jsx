import React, { Fragment } from 'react';
import HeartLike from '../components/HeartLike'
import '../styles/componentsStyles/ListTrack.scss';

//********  Icons  **********//
import { FavouriteIcon, DownloadItemsIcon, ShareIcon } 
from './Icons';

const ListTrack = ({number, song, artist, reproductions, time}) => {
    return (
        <Fragment>
            <section className='listTrack'>
                <p className='listTrack__Number'>{number}</p>
                <div className='listTrack__Favourite'>
                    {<FavouriteIcon />}
                    <HeartLike />
                </div>
                <div className='listTrack__Song'>{song}</div>
                <div className='listTrack__Artist'>{artist}</div>
                <p className='listTrack__Reproductions'>{reproductions}</p>
                <p className='listTrack__Time'>{time}</p>
                <div className='listTrack__Download'>
                    {<DownloadItemsIcon />}
                </div>
                <div className='listTrack__Share'>
                    <ShareIcon />
                </div>
                <div className='listTrack__Points'>...</div>
            </section>
        </Fragment>
    );
}
 
export default ListTrack;
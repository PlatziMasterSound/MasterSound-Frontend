import React from 'react';
import PlayListFolder from '../components/PlayListFolder'

const PlayList = () => {
    const playListLocalStorage = JSON.parse( localStorage.getItem("PlayList"))

        return (
            <div>  
              {
                playListLocalStorage.map((data) => (
                    <PlayListFolder data={data} key={data.playlist_id} {...data}/>
                ))
              }
            </div>
        );
}

export default PlayList;
import { useState, useEffect } from 'react';


export function useFetchPlayList () {

  const [PlayList, setPlayList] = useState([]);

  const PlayListURL = `https://mastersound-backend-test.azurewebsites.net/api/playlists/user/1`

  async function fetchMusic (PlayListURL) {
    const response = await fetch(PlayListURL);
    const data = await response.json();
    setPlayList(data)
  }

  useEffect (() => {
    fetchMusic(PlayListURL);
  }, [PlayListURL])


  return PlayList
}


import { useState, useEffect } from 'react';


export function useFetchPlayList () {

  const [PlayList, setPlayList] = useState([]);

  const URL = `https://mastersound-backend-test.azurewebsites.net/api/playlists/user/1`

  async function fetchMusic () {
    const response = await fetch(URL);
    const data = await response.json();
    setPlayList(data)
  }

  useEffect (() => {
    fetchMusic(URL);
  }, [])


  return PlayList
}


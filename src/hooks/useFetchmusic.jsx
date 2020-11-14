import { useState, useEffect } from 'react';


export function useFetchmusic ( spt_album_id ) {

  const [music, setMusic] = useState([]);

  const url = `https://mastersound-backend-test.azurewebsites.net/api/albums/${spt_album_id}/songs`

  async function fetchMusic (url) {
    const response = await fetch(url);
    const data = await response.json();
    setMusic(data)
  }

  useEffect (() => {
    fetchMusic(url);
  }, [url])

  return music
}


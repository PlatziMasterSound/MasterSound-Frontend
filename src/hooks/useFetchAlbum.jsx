import { useState, useEffect } from 'react';


export function useFetchAlbum () {
  
  const [album, setAlbum] = useState([]);

  const callAlbum = "https://mastersound-backend-test.azurewebsites.net/api/albums/new-releases";

  async function fetchAlbum (callAlbum) {
    const response = await fetch(callAlbum);
    const data = await response.json();
    setAlbum(data)
  }

  useEffect (() => {
    fetchAlbum(callAlbum);
  }, [callAlbum])


  return album
}


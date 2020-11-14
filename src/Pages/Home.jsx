import React, { useEffect }  from 'react'
import { useFetchAlbum } from '../hooks/useFetchAlbum'
import { useFetchPlayList } from '../hooks/useFetchPlayList'

import Panel from '../components/Panel'
import '../styles/PagesStyles/Home.scss'
import CircleAlbumGarden from '../components/CirculeAlbumGarden'
import TopTracks from '../components/TopTracks'
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden'
//import Playbar from '../components/Playbar'
import MenuBar from '../components/MenuBar'


const Home = () => {
    //-----------------FETCH Albums (call toAPI)------------------------------//
    const albumList = useFetchAlbum('https://mastersound-backend-test.azurewebsites.net/api/albums/new-releases')       
     
    //-----------------storing the album in the local storage----------------------//
           localStorage.setItem( "albums", JSON.stringify( albumList ))

        const PlayList = useFetchPlayList()
//---------------storing the PlayList in the local storage----------------------//
    localStorage.setItem( "PlayList", JSON.stringify( PlayList ))

    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
        return(
            <div className='Home__container'>
                    <Panel />
                    <section className='Content__section'>
                        <MenuBar />
                        <CircleAlbumGarden SectionName='Tendencias'/>
                        <SquareAlbumGarden SectionName='Recomendaciones'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Escuchado recientemente'/>
                        <TopTracks />
                    </section>
                                    
                </div>
        )
}
export default Home;
import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import '../styles/PagesStyles/Panel.scss'
import SideLinks from '../components/SideLinks'
import Logo from '../Assets/Icons/logo.svg'
import Plus from '../Assets/Icons/Plus.svg'
import CloseBTN from '../Assets/Icons/CloseBTN.svg'
import PlayList from '../components/PlayList'
import PlayListForm from '../components/PlayListForm'

//********  Icons  **********//
import { AddIcon, DiscoverIcon, SongsIcon,
        AlbumsIcon, ArtistsIcon, YoutubeIcon,
        FavouriteIcon, RecentHistoryIcon,
        LocalfilesIcon, DownloadItemsIcon } 
from '../components/Icons';

class ModalNewPlayList extends Component{
    render(){
        return(
          <div className="Modal">
            <div className="Modal__container-PlayList">
                <div className="close-button">
                    <img src={CloseBTN} alt="Close" onClick={this.props.onCloseLogin}/> 
                </div>
                <PlayListForm />
            </div> 
        </div>
        )
    }
}

export default class Panel extends Component {

    state = {isModalNewPlayListOpen: false}

    _openNewPlayList = () => this.setState({ isModalNewPlayListOpen:true })
    _closeNewPlayList = () => this.setState({ isModalNewPlayListOpen:false })

    render() {
        return(
            <div className='panel'>
                <img className='panel__logo' src={Logo} alt='App logo' />
                <Link to="/home">
                    <SideLinks icon={<DiscoverIcon />} text='Discover' />
                </Link>
                <SideLinks icon={<SongsIcon />} text='Songs' />
                <Link to="/album-library">
                    <SideLinks icon={<AlbumsIcon />} text='Albums' />
                </Link>
                <Link to="/artist-section">
                    <SideLinks icon={<ArtistsIcon />} text='Artists' />
                </Link>
                <SideLinks icon={<YoutubeIcon />} text='YouTube' />
                
                <p className='panel__p'>My Tracks</p>
                <Link to="/favorite">
                    <SideLinks icon={<FavouriteIcon />} text='Favourite' />
                </Link>
                <SideLinks icon={<RecentHistoryIcon />} text='Recent History' />
                <SideLinks icon={<DownloadItemsIcon />} text='Download Items' />
                <SideLinks icon={<LocalfilesIcon />} text='Local Files' />

                <div className='PlayList'>
                    <p className='PlayList__p'>Playlist</p>
                        <img className='PlayList__img' src={Plus} alt='Agregar' onClick={this._openNewPlayList}/>
                    {
                    this.state.isModalNewPlayListOpen &&
                    <ModalNewPlayList onCloseLogin={this._closeNewPlayList}/> 
                    }
                </div>
                {/* <PlayList folderIcon={<AddIcon />}/> */} 
            </div>
        )
    }
}
                   
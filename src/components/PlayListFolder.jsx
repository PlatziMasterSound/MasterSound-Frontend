import React from 'react';
import { AddIcon } from '../components/Icons'
import '../styles/componentsStyles/PlayListFolder.scss'

const PlayListFolder = ({data}) => {
    
        return (
            <div className="PlayList-container">
                <AddIcon />
                <p>{data.playlist_name}</p>
            </div>
        );
    }

export default PlayListFolder;
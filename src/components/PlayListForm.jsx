import React, { useState } from 'react';
import Input from './Input'
import ButtonWhite from './ButtonWhite'

const PlayListForm = () => {
    const [playlist_name, setPlay_List] = useState('');
    
    const id = localStorage.getItem("id")
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`https://mastersound-backend-test.azurewebsites.net/api/playlists/user/${id}`, {
            method: 'post',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playlist_name,
            })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if(response) {
                console.log('Success:', response);
            }
        } 
    )};

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='Input-style'>
                        <Input 
                        type='text' 
                        placeholder='Playlist Name' 
                        name='Play_List'
                        onChange={(e) => setPlay_List(e.target.value)}
                        value={playlist_name} />
                    </div>
                    <div className='create-button'>
                        <ButtonWhite text='Create' />
                    </div>
                </form>
        </div>
        );
    }

export default PlayListForm;

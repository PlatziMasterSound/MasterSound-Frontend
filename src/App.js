import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register'
import AnimationLoader from './Pages/AnimationLoader'
import Album from './Pages/Album'
import AlbumLibrary from './Pages/AlbumLibrary'
import NotFound from './Pages/NotFound'
import ArtistSection from './Pages/ArtistSection'
import Favorite from './Pages/Favorite'
<<<<<<< HEAD
//import Playbar from './components/Playbar'
=======
import PrivateRoute from './context/auth'

>>>>>>> 49f963508dc5d7c76a6aa05d3e3638834e865af8

function App() {
  return (
      <BrowserRouter>
        
          <Switch>
            <Route 
              exact 
              path='/' 
              component={AnimationLoader} 
            />
            <PrivateRoute 
              exact
              path='/home'
              component={Home}
            />
            <Route 
              exact 
              path='/album/:myId' 
              component={Album} 
            />
            <Route 
              exact 
              path='/artist-section' 
              component={ArtistSection} 
            />
            <Route 
              exact 
              path='/album-library' 
              component={AlbumLibrary} 
            />
            <Route 
              exact 
              path='/favorite' 
              component={Favorite} 
            />
            <Route 
              exact 
              path='/signin' 
              component={SignIn} 
            />
            <Route 
              exact 
              path='/register' 
              component={Register} 
            />
            <Route 
              component={NotFound} 
            />
          </Switch>
      </BrowserRouter>
  );
}

export default App;

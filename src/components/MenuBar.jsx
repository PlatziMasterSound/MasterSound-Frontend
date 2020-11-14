import React from 'react'
import Bell from '../components/Icons/Bell'
import Radio from '../components/Icons/Radio'

import '../styles/componentsStyles/MenuBar.scss'
import UserProfile from './UserProfile'

const MenuBar = () => {
  return (
	<nav className="nav-wrapper-flex">
		<input type="text" placeholder="what do you want to listen?"></input>
		<ul className="NavLinks">
			<li className="NavRadio"><a href="/"><Radio /></a></li>
			<li className="NavBell"><a href="/"><Bell /></a></li>
			<li className="nav-profile"><UserProfile /></li>
		</ul>
	</nav>
  )
}

export default MenuBar
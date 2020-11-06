import React, { Fragment } from 'react'
import '../styles/componentsStyles/SideLinks.scss'

const SideLinks = ({icon, text}) => {
    return (
        <Fragment>
            <div className='SideLinks'>
                {icon}
                <p>{text}</p>
            </div>
        </Fragment>
    );
}
 
export default SideLinks;
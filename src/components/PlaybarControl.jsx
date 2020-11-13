import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import '../styles/componentsStyles/SideLinks.scss';

const PlaybarControl = ({ icon, classname, event }) => {
    return (
        <Fragment>
            <div className={classname} onClick={event}>
                {icon}
            </div>
        </Fragment>
    );
}
 
export default PlaybarControl;
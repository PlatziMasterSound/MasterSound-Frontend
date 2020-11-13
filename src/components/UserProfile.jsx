import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ProfileImage from '../Assets/Icons/ProfileImage.svg'
import '../styles/componentsStyles/UserProfile.scss'

const id = localStorage.getItem("id")
const token = localStorage.getItem("token")

function Modal() {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('id', id);
    localStorage.removeItem('token', token);
    history.push("/");
  }

  return (
    <div className="perfilMenu">
      <Link onClick={handleClick}>
        Cerrar Sesion
      </Link>
    </div>
  );
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
    <section className="UserProfile__section" onClick={this.handleClick}>
      {this.state.isToggleOn ? '' : <Modal onClose={this._closeModal}/>}
      <img src={ProfileImage} alt="profile icon"/>
      <p>User Name </p>
    </section>
  );
}
}

export default UserProfile
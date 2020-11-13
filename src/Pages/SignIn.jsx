import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../styles/PagesStyles/SignIn.scss';
import Logo from '../Assets/Icons/logo.svg';
import Input from '../components/Input';
import ButtonWhite from '../components/ButtonWhite';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingIn() {
   
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const successToast = () => {
        toast('succes custom Toast', {
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        }) 
    };

    const handleSubmit = (e) => {
        e.preventDefault();      
        fetch('https://mastersound-backend.azurewebsites.net/api/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json())
        .then(response => {
            if(response.access_token) {
                console.log('Success:', response);
                var token = response.access_token;
                localStorage.setItem('token', token)
                var decode = jwt_decode(token);
                localStorage.setItem('id', decode.identity);
                console.log(decode);
                history.push('/home');
            } else {
                console.log('Error')
                toast.error('e-mail o password incorrecto!!!', {
                    draggable: true,
                })
            }
        })
        .catch(error => {
            toast.warn('Error en el servidor!!!', {
                draggable: true,
            })
            console.error('Error:', error)
        }) 
    };

    return(
        
        <main className='mainSignIn'>
        <img src={Logo} alt='Logo' />
        <form onSubmit={handleSubmit} className='mainSignIn__form'>
            <>
                <ToastContainer 
                    position="top-center"
                    draggable={false} 
                    autoClose={8000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover 
                    style={{ width: '400px', 
                            height: '300px',
                            color:'white',
                            top:'26%' }}
                />
            </>
            <label>e-mail</label>
            <Input
                type='email' 
                placeholder='e-mail' 
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
            />
            <label>Password</label>
            <Input
                type='password' 
                placeholder='Password' 
                name='password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
            />   
            <div className="theme-switch-wrapper">
                <p>Mantener la sesion abierta</p>
                <label className="theme-switch">
                <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div>    
            <ButtonWhite text='Iniciar Sesion' />
            
            <section className='mainSignIn__form--link'>
                <Link to='/'>Olvide mi contraseña</Link>
                <Link to='/register'>Crear una cuenta</Link>
            </section>
            </form>
        </main>
    )
}

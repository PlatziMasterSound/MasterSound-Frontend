import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import Input from '../components/Input';
import '../styles/PagesStyles/Register.scss';
import Logo from '../Assets/Icons/logo.svg';
import ButtonWhite from '../components/ButtonWhite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Register () {
    const [given_name, setGiven_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country_id, setCountry_id] = useState('');
    //const [image_url, setImage_url] = useState('');
    const [sex, setSex] = useState('');

    const history = useHistory();

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
        
        fetch('https://mastersound-backend-test.azurewebsites.net/api/auth/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                given_name,
                last_name,
                email, 
                password,
                country_id,
                image_url: 'https://i.scdn.co/image/23009960c33ef08d5973440cca17985a6c70a515',
                sex
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.user_id) {
                toast.success('Registrado Correctamente!!!', {
                    draggable: true,
                })
                history.push('/signin')
            } else {
                toast.error('Completar o Corregir datos!!!', {
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
        <main className='mainRegister'>
            <img src={Logo} alt='Logo' />
            <form onSubmit={handleSubmit} className='mainSignIn__form'>
                <>
                    <ToastContainer 
                        position="top-right"
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
                                opacity:'0.7' }}
                    />
                </>
                <label>Nombre de Usuario</label>
                <Input
                    type='text' 
                    placeholder='Nombre' 
                    name='given_name'
                    onChange={(e) => setGiven_name(e.target.value)}
                    value={given_name} 
                />
                <label>Apellido del Usuario</label>
                <Input
                    type='text' 
                    placeholder='Apellido' 
                    name='last_name'
                    onChange={(e) => setLast_name(e.target.value)}
                    value={last_name} 
                />
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
                <label>Pais de Origen</label>
                <select className='select' value={country_id} onChange={(e) => setCountry_id(e.target.value)}>
                    <option>Seleccionar País</option>
                    <option value='137'>Mexico</option>
                    <option value='47'>Colombia</option>
                    <option value='55'>Cuba</option>
                </select>  
                <label>Sexo</label>
                <select className='select' value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option>Seleccionar Genero</option>
                    <option value='M'>Hombre</option>
                    <option value='F'>Mujer</option>
                </select>  
                <ButtonWhite text='Crear Cuenta' />
            </form>
        </main>
    )
}
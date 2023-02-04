import { useState, useRef } from 'react';
import useLoginForm from '../hooks/useLoginForm';
import useSystem_Users from '../api/useSystem_Users';
import Input from '../components/Input';
import Field from '../components/Field';
import TextError from '../components/TextError';
import '../css/Login.css';

const Login = () => {
    const server = 'http://localhost:4000/api';
    const [ value, handleChange, startSesion ] = useLoginForm({ user: '', password: '', buttonPushed: false });
    const [ userData, changeCredentials ] =  useSystem_Users({ server: server, user: '', password: ''});

    return(
        <div>
            <div className='login-container'>
                <h1 className='login-tittle'>Login</h1>
                <div className='login-box'>
                    <h2>Bienvenido</h2>

                    <div>
                        <Field
                        name='user'
                        value={value.user}
                        onChange={handleChange}
                        >
                            Usuario
                        </Field> 

                        <Field
                        name='password'
                        value={value.password}
                        onChange={handleChange}
                        >
                            Contraseña
                        </Field>
                        {value.buttonPushed && value.password.length === 0 ? <TextError>Debes ingresar una contraseña</TextError> : console.log(value.password.length)}
                        <Input type='submit' value='Iniciar Sesión' onClick={startSesion}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
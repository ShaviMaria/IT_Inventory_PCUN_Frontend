import { useRef } from 'react';
import useLoginForm from '../hooks/useLoginForm';
import Input from '../components/Input';
import Field from '../components/Field';
import TextError from '../components/TextError';
import '../css/Login.css';

const Login = () => {
    const server = 'http://localhost:4000/api';
    const [ value, handleChange, manageCredentials ] = useLoginForm({ user: '', password: '', buttonPushed: false, server: server, credentialsFail: false, startingSesion: false});

    return(
        <div>
            <div className='login-container'>
                <h1 className='login-tittle'>Login</h1>
                <div className='login-box'>
                    <h2>Bienvenido</h2>

                    <div>
                        {value.credentialsFail ? <TextError>Usuario o Contraseña incorrectos</TextError> : console.log('credentialsFail False')}
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
                        {value.buttonPushed && value.user.length === 0 ? <TextError>Debes ingresar un usuario</TextError> : console.log(value.password.length)}
                        <Input type='submit' value='Iniciar Sesión' onClick={async () => {
                            await manageCredentials({ user: value.user, password: value.password });
                        }}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
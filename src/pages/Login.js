import { useState, useRef } from 'react';
import Input from '../components/Input';
import Field from '../components/Field';
import TextError from '../components/TextError';
import '../css/Login.css';

const Login = () => {
    const [ value, setValue ] = useState({ user: '', password: '', buttonPushed: false });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const startSesion = () => {
        setValue({
            ...value,
            ['buttonPushed']: true
        });
        console.log(value.buttonPushed);
    }
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
                        onChange={handleChange}>
                            Usuario
                        </Field> 

                        <Field
                        name='password'
                        value={value.password}
                        onChange={handleChange}>
                            Contraseña
                        </Field>
                        {value.buttonPushed && value.password.length === 0 ? <TextError>Debes ingresar una contraseña</TextError> : <span></span>}
                        <Input type='submit' value='Iniciar Sesión' onClick={startSesion}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
import { useState, useRef } from 'react';
import '../css/Login.css';

const Login = () => {
    const [ value, setValue ] = useState({ user: '', password: '', buttonPushed: false });
    const inputName = useRef();
    const inputPassword = useRef();


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
            <h1>Login</h1>
            <div>
                <h2>Bienvenido</h2>

                <div>
                    <div>
                        <label>Usuario</label>
                        <input name='user' value={value.user} onChange={handleChange} ref={inputName}/>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input name='password' value={value.password} onChange={handleChange} ref={inputPassword}/>
                        {value.buttonPushed && value.password.length === 0 ? <p>Debes ingresar una contraseña</p> : <span></span>}
                    </div>
                    <input type='submit' value='Iniciar Sesión' onClick={startSesion}/>
                </div>
            </div>
        </div>
    )
}

export default Login;
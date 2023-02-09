import useLoginForm from '../hooks/useLoginForm';
import Input from '../components/Input';
import Field from '../components/Field';
import TextError from '../components/TextError';
import '../css/Login.css';

const Login = () => {
    const server = 'http://localhost:4000/api';
    const [ value, sValue, handleChange, manageCredentials, setSValue ] = useLoginForm({ user: '', password: '', buttonPushed: false, server: server, credentialsFail: false, startingSesion: false});

    const inputEvent = async e => {
        if(e.key == 'Enter') {
            await manageCredentials({ user: value.user, password: value.password });
        }
    }

    return(
        <>
            <div className='login-container'>
                <h1 className='login-tittle'>Login</h1>
                <div className='login-box'>
                    <h2>Bienvenido</h2>

                    <div>
                        {sValue.credentialsFail ? <TextError>Usuario o Contraseña incorrectos</TextError> : console.log('credentialsFail False')}
                        <Field
                        name='user'
                        type='text'
                        onKeyPress={inputEvent}
                        value={value.user}
                        onChange={handleChange}
                        >
                            Usuario
                        </Field>

                        <Field
                        name='password'
                        type='password'
                        onKeyPress={inputEvent}
                        value={value.password}
                        onChange={handleChange}
                        >
                            Contraseña
                        </Field>
                        {sValue.credentialsFail2 ? handleChange({ target: {name: 'password', value: ''} }) : <span></span>}
                        {sValue.credentialsFail2 ? setSValue('credentialsFail2', '') : <span></span>}
                        {sValue.buttonPushed && value.password.length === 0 ? <TextError>Debes ingresar una contraseña</TextError> : <span></span>}
                        {sValue.buttonPushed && value.user.length === 0 ? <TextError>Debes ingresar un usuario</TextError> : <span></span>}
                        <Input type='submit' value='Iniciar Sesión' onClick={async () => {
                            await manageCredentials({ user: value.user, password: value.password });
                        }}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
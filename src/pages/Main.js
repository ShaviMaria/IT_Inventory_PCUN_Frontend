import { useEffect } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Main = () => {

    useEffect(() => {
        if(!cookies.get('Windows_User')) {
            window.location.href = './';
        }
    }, []);

    return(
        <>
            <h1>This is the main page</h1>
            <h2>{cookies.get('Windows_User')}</h2>
        </>
    )
}

export default Main;
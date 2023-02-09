import { useState } from 'react';
import md5 from 'md5';

const useSystem_Users = ({ server, user, password, startingSesion }) => {
    console.log('RENDERING useSystem_Users');
    const [value, setValue] = useState({ server: server, user: user, password: password, startingSesion: startingSesion, userData: undefined });

    const handleValue = (property, v) => {
        setValue({
            ...value,
            [property]: v
        });
    }

    const manageCredentials = async (credentials) => {
        const userData = await callSystem_Users(value.server, credentials.user, credentials.password); 
        setValue({
            ...value,
            ['user']: credentials.user,
            ['password']: credentials.password,
            ['userData']: userData
        });
        
        console.log(userData);
        if(userData === undefined || userData.length === 0){
            setValue({
                ...value,
                ['credentialsFail']: true,
                ['credentialsFail2']: true,
                ['buttonPushed']: true,
            });
        } else {
            setValue({
                ...value,
                ['credentialsFail']: false,
                ['credentialsFail2']: false,
                ['buttonPushed']: false,
            });
            window.location.href='./main';
            console.log('LOGIN OKKKK');
        }
    }

    return [ value, manageCredentials, handleValue ];
}

//OTHER FUNCTION
const callSystem_Users = async (server, user, password, startingSesion) => {
    let userData = undefined;

    console.log('***********************************');
    console.log('DENTRO DE callSystem_Users');
    console.log(`SERVER: ${server}`);
    console.log(`USER: ${user}`);
    console.log(`PASSWORD: ${password}`);
    console.log(`STARTINGSESION: ${startingSesion}`);

    if(user.length != 0 && password.length != 0) {
        const md5Password = md5(password);
        try{
            const response = await fetch(`${server}/System_Users/${user}/${md5Password}`, {
                //headers: {
                    //'Content-Type': 'application/json',
                //},
                method: 'GET', 
                //mode: 'no-cors'
            });
            userData = await response.json();
        } catch(error) {
            console.error(error);
        }
    }

    console.log('SALIENDO DE callSystem_Users');
    console.log('***********************************');

    return userData;
}

export default useSystem_Users;
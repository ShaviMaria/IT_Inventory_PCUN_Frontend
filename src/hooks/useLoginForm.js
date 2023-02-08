import { useState } from 'react';
import useSystem_Users from '../api/useSystem_Users';

const useLoginForm = (initial) => {
    const [ value, setValue ] = useState(initial);
    const [ manageCredentials ] = useSystem_Users({ user: value.user, password: value.password, server: value.server });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    } 

    return [ value, handleChange, manageCredentials ];
}

export default useLoginForm;
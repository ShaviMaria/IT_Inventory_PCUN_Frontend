import { useState } from 'react';

const useLoginForm = (initial) => {
    const [ value, setValue ] = useState(initial)
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
    }
    return [ value, handleChange, startSesion ];
}

export default useLoginForm;
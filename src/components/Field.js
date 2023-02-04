import { useState } from 'react';
import Input from './Input';
import '../css/Field.css';

const Field = ({ children, ...rest }) => {
    const [ value, setValue ] = useState({ user: '', password: '', buttonPushed: false });
    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <label className='label'>{children}</label>
            <Input {...rest}/>
        </div>

    )
}

export default Field;
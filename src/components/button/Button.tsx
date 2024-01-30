import React from 'react';

interface Props {
    label: string;
}

const Button: React.FC<Props> = ({label}) => {
    return (
        <button type='submit' className='btn'>{label}</button>
    );
}

export default Button;

import React from 'react';

interface Props {
    label: string;
}

const MyButton: React.FC<Props> = ({label}) => {
    return (
        <button className='btn'>{label}</button>
    );
}

export default MyButton;

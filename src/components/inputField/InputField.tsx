import React from 'react';

interface Props {
    type?: "number" | "date";
    value: string;
    onChange: (val: string) => void;
}

const InputField: React.FC<Props> = ({type, value, onChange}) => {
    return (
        <input
            className='input-field'
            type={type}
            value={value}
            onChange={({ target: { value } }) => onChange(value)}
        ></input>
    );
}

export default InputField;

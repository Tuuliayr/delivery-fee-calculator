import React from 'react';

interface Props {
    type: "number" | "date" | "time";
    id: string
    value: string;
    placeholder?: string;
    onChange: (val: string) => void;
}

const InputField: React.FC<Props> = ({type, id, value, placeholder, onChange}) => {
    return (
        <input
            required
            className='input-field'
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={({ target: { value } }) => onChange(value)}
        ></input>
    );
}

export default InputField;

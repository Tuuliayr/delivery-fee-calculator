import React, { useState } from 'react';
import Button from '../button/Button';
import InputField from '../inputField/InputField';

const Calculator = () => {
    const [val, setVal] = useState("");

    return (
        <div className='calculator'>
            <div>Calculate delivery fee</div>
            <InputField type='number' value={val} onChange={setVal}/>
            <InputField type='date' value={val} onChange={setVal}/>
            <Button label='Calculate'></Button>
        </div>
    );
}

export default Calculator;

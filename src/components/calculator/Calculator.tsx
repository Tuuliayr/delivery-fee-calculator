import React, { useState } from 'react';
import Button from '../button/Button';
import InputField from '../inputField/InputField';
import Result from './Result';

const Calculator = () => {
    const [val, setVal] = useState("");

    return (
        <div className='calculator'>
            <div className='title'>Calculate delivery fee</div>
            <div>
                <div className='fields'>
                    <div className='field-names'>
                        <div className='field-name'>Cart value</div>
                        <div className='field-name'>Delivery distance</div>
                        <div className='field-name'>Amount of items</div>
                        <div className='field-name'>Time</div>
                    </div>
                    <div className='field-values'>
                        <div className='field-value'>
                            <InputField type='number' value={val} onChange={setVal}/>
                            <div>€</div>
                        </div>
                        <div className='field-value'>
                            <InputField type='number' value={val} onChange={setVal}/>
                            <div>m</div>
                        </div>
                        <div className='field-value'>
                            <InputField type='number' value={val} onChange={setVal}/>
                        </div>
                        <div className='field-value'>
                            <InputField type='date' value={val} onChange={setVal}/>
                        </div>
                    </div>
                </div>
                <Button label='Calculate'/>
            </div>
            <Result/>
        </div>
    );
}

export default Calculator;

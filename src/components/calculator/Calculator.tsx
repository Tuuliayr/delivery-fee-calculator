import React, { useState } from 'react';
import Button from '../button/Button';
import InputField from '../inputField/InputField';
import Result from './Result';
import { calculateFee } from '../../utils/calculateFee';

const Calculator = () => {
    const [cartVal, setCartVal] = useState("");
    const [distanceVal, setDistanceVal] = useState("");
    const [amountVal, setAmountVal] = useState("");
    const [dateTimeVal, setDateTimeVal] = useState("");
    const [deliveryFee, setDeliveryFee] = useState("0");

    const handleSubmit = (e: React.SyntheticEvent) => {
        setDeliveryFee(calculateFee(cartVal, distanceVal, amountVal, dateTimeVal));
        e.preventDefault();
    }

    return (
        <div className="calculator">
            <div className="title">Calculate delivery fee</div>
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="field-names">
                        <label htmlFor="cart" className="field-name">Cart value</label>
                        <label htmlFor="distance" className="field-name">Delivery distance</label>
                        <label htmlFor="amount" className="field-name">Amount of items</label>
                        <label htmlFor="date" className="field-name">Order time</label>
                    </div>
                    <div className="field-values">
                        <div className="field-value">
                            <InputField data-test-id="cartValue" id="cart" type="number" value={cartVal} onChange={setCartVal}/>
                            <div>€</div>
                        </div>
                        <div className="field-value">
                            <InputField data-test-id="deliveryDistance" id="distance" type="number" value={distanceVal} onChange={setDistanceVal}/>
                            <div>m</div>
                        </div>
                        <div className="field-value">
                            <InputField data-test-id="numberOfItems" id="amount" type="number" value={amountVal} onChange={setAmountVal}/>
                        </div>
                        <div className="field-value">
                            <InputField data-test-id="orderTime" id="date" type="datetime-local" value={dateTimeVal} onChange={setDateTimeVal}/>
                        </div>
                    </div>
                </div>
                <Button label="Calculate"/>
            </form>
            <Result data-test-id="fee" fee={deliveryFee}/>
        </div>
    );
}

export default Calculator;

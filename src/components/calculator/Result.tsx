import React from 'react';

interface Props {
    price: string;
}

const Result: React.FC<Props> = ({price}) => {
    return (
        <div className='circle-big'>
            <div className='circle-small'>
                Delivery price:
                <div className='price'>{price}</div>
            </div>
        </div>
    )
}

export default Result;

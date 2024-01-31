import React from 'react';

interface Props {
    fee: string;
}

const Result: React.FC<Props> = ({fee}) => {
    return (
        <div className='circle-big'>
            <div className='circle-small'>
                Delivery price:
                <div className='fee'>{fee}€</div>
            </div>
        </div>
    )
}

export default Result;

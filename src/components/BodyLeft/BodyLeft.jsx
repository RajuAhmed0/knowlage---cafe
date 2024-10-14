import React, { useEffect, useState } from 'react';
import BodyCard from './BodyCard';

const BodyLeft = () => {

    const [cardDatas, setCardDatas] = useState([]);
    console.log(cardDatas);


    useEffect(() => {
        fetch('Cafe.json')
            .then(res => res.json())
            .then(data => setCardDatas(data))
    }, []);

    return (
        <div className='xl:w-[845px] lg:w-[580px]'>
            {
                cardDatas.map(cafeData => <BodyCard
                key={cafeData.id}
                cafeData = {cafeData}
                ></BodyCard>)

            }
        </div>
    );
};

export default BodyLeft;
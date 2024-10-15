import React, { useEffect, useState } from 'react';

const BodyRight = ({ saveInfo }) => {

    const [time, setTime] = useState(0)
    // console.log(time);
    

    useEffect(()=>{
        for (const element of saveInfo) {
            setTime(time + parseInt(element?.readTime));
        }
    },[saveInfo])


    return (
        <div className='lg:w-[411px] md:w-[300px] md:ml-3'>
            <h2 className="bg-[#6047EC1A] text-[#6047EC] border border-[#6047EC] lg:py-[21px] py-4 rounded-lg text-center mb-6 lg:text-2xl md:text-xl text-base font-bold"> Spent time on read : {time} min</h2>

            <div className="items-center bg-[#1111110D] lg:p-[30px] p-5 rounded-lg shadow-md lg:w-[411px] md:w-[300px]">
                <h2 className="font-bold lg:text-2xl md:text-xl mb-4">Bookmarked Blogs : {saveInfo.length}</h2>
                {
                    saveInfo.map((info, i) => <h3 key={i} className='lg:text-lg text-base font-semibold lg:leading-7 bg-[#FFFFFF] lg:px-5 px-3 lg:py-5 py-3 rounded-lg mb-4'>{info.title}</h3>)

                }

            </div>
        </div>
    );
};

export default BodyRight;
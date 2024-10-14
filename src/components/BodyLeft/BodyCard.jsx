import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const BodyCard = ({ cafeData }) => {
    const { thumbnailImg, title, profileImg, profileName, postDate, readTime, hashtag } = cafeData
    return (
        <div className="mb-[78px]">
            <img src={thumbnailImg} alt="" className='rounded-lg' />
            <div className="flex items-center justify-between mt-[34px]">
                <div className="flex items-center md:gap-6 gap-2">
                    <img src={profileImg} alt="" className="md:w-[60px] w-10" />
                    <div>
                        <h3 className="md:text-2xl text-base font-bold">{profileName}</h3>
                        <p className="font-semibold md:text-base text-xs text-[#11111199]">{postDate} (4 days ago)</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className='md:text-base text-xs'>{readTime} min read</p>
                    <FaRegBookmark />
                </div>
            </div>
            <h1 className="my-4 lg:text-[40px] md:text-2xl text-xl font-bold md:leading-[64px]">{title}</h1>
            <div className="flex items-center gap-4 font-medium text-[#11111199] text-xl">
                {
                    hashtag.map(tag => <p className='md:text-base text-xs'>{tag}</p>)
                }
            </div>
            <button className="mt-[21px] text-[#6047EC] md:text-xl text-sm font-semibold underline">Make as Read</button>
        </div>
    );
};

export default BodyCard;
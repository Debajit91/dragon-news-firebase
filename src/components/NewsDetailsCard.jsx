import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p className='text-justify'>{news.details}</p>

            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Back To Category</Link>
        </div>
    );
};

export default NewsDetailsCard;
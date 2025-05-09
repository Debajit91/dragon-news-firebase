import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <ClipLoader></ClipLoader>
        </div>
    );
};

export default Loading;
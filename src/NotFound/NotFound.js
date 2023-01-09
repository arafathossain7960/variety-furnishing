import React from 'react';
import './NotFound.css';
import notfound from '../../src/media/images/notfound.png';

const NotFound = () => {
    return (
        <div id='notFound'>
        
            <div className='py-16 text-3xl bold text-second text-center'>
            <h2 className='text-primary'>Something went wrong, the page</h2>
            </div>
        </div>
    );
};

export default NotFound;
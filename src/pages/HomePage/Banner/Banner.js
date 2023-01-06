import React from 'react';
import image1 from '../../../media/images/bed.png';
import image2 from '../../../media/images/chair.png';

import image4 from '../../../media/images/sofa.png';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 text-accent  '>
           
           <div className=''>
                <h2>Hello this is a title</h2>
                <h2>Hello this is a title</h2>
                <h2>Hello this is a title</h2>
           </div>
           <div className=''>
                <h1>this is a another page</h1>
                <img src={image1} alt="" />

           </div>
        </div>
    );
};

export default Banner;
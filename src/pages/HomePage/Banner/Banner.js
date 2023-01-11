import React from 'react';
import image1 from '../../../media/images/bed.png';
import image2 from '../../../media/images/chair.png';
// import './Banner.css';
import image4 from '../../../media/images/sofa.png';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 text-accent   '>
           
           <div className='text-center my-16'>
                <h1 className='text-4xl bolder mb-2'>Welcome to <span className='bold text-primary'>Variety Furnishing</span></h1>
                <p className='text-xl mb-6'>We are providing quality used product for you,<br />
                 it's make furnishing your rant living home, within your budget. </p>
                 <a href='#home' className='btn btn-primary'>Chose</a>
           </div>
          <div>
          <div className='banner '>
                
                <img className='bannerMainImg'  src={image1} alt="" />
                {/* <img className=' hoverImg' src={image4} alt='' /> */}

           </div>
          </div>
        </div>
    );
};

export default Banner;
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../componets/BookingModal/BookingModal';
import RepoertModal from '../../../componets/ReportModal/RepoertModal';
import { AuthContext } from '../../../context/AuthProvider';
import ProductDetails from './ProductDetails';

const ProductsCategory = () => {
  const [modalData, setModalData]=useState(null);
    const {user}=useContext(AuthContext);
    const products = useLoaderData();

  
    return (
        <div className='px-6 py-12 '>
            {
                products.map(product =><ProductDetails
                    key={product._id}
                    product={product}
                    setModalData={setModalData}
                
                >
                </ProductDetails>)
            }
            
          <div>
          { 
          modalData && 
          <BookingModal
              
              user={user}
              product={modalData}
              setModalData={setModalData}
              ></BookingModal> }

              {
                modalData&&
                <RepoertModal
                user={user}
                product={modalData}
                setModalData={setModalData}
                ></RepoertModal>
              }
          </div>
        </div>
    );
};

export default ProductsCategory;





import React from 'react';

const Card = ({service}) => {
    const {  name, img, description } = service;

    
    return (
        <>
       
                <div className='col-lg-4 col-md-6 col-12 mb-3 mt-5'>
                <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container  ">
                  <img src={img} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight mt-3 text-primary">{name}</h3>
                <p className="text-center pragraph-weight p-3">{description}</p>
              </div>
            </div>
                </div>
                
            
          </>
    );
};

export default Card;
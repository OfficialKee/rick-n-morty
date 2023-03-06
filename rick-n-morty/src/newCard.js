import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function NewCard({characters}) {
    const theBlock = characters.map((card, index) => {
  return (
    <>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={index}
        src={card.image}
        
    />
    
      
      
      </>
  );
 })  
 return <MDBCarousel showControls delay={100}>{theBlock}</MDBCarousel>
}


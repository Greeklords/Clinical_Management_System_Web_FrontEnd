import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import HeaderDoctorProfile from "./HeaderDoctorProfile";
import AfterloginFutter from "./AfterloginFutter";

function LabCard() {
  return (

    <>    
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='lab1.jpg'
              text='View And Update Reports'
              label='check now'
              path='/lab'
            />
            <CardItem
               src='lab2.jpg'
               text='View Special Scheduling'
               label='check now'
               path='/view special scheduling'
            />
          </ul>
        </div>

        
      </div>

        

    </div>

    <div class="doc_footer">
        <AfterloginFutter />
        </div>
    </>
  );
}

export default LabCard;
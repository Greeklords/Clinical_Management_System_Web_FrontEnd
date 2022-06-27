import React from 'react';
import CardItem from './CardItem';
import './Card.css';
import HeaderDoctorProfile from "./HeaderDoctorProfile";
import AfterloginFutter from "./AfterloginFutter";

function AllAppointment() {
  return (
      <>

   
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='online.png'
              text='Online Appoinment'
              label='view now'
              path='/onlinePatientAdd'
            />
            <CardItem
               src='physical.png'
               text='Physical Appoinment'
               label='view now'
               path='/physicalpatientAdd'
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

export default AllAppointment;
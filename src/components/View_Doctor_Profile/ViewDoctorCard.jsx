import React,{useState,useEffect} from "react";
//import {Link} from 'react-router-dom';
import CardItem from '../CardItem';
import './ViewDoctorCard.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";

function ViewDoctorCard(){

    return (

      <>      
     <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem 
              src='https://st.depositphotos.com/1000423/3080/i/450/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg'
              text ='Cardiologists '
              label='view doctor profile'
              path='/displayDoctorCard/Cardiologists'
               
            />
           
            <CardItem 
              src='https://www.careergirls.org/wp-content/uploads/2018/05/obgyn_1920x1080.jpg'
              text='Obstetrician'
              label='view doctor profile'
              path='/displayDoctorCard/Obstetrician'
             
            />
         
            <CardItem
              src='https://goldskincare.com/wp-content/uploads/2020/08/sculpsure-Gold-Skin-Care-Center-38.png'
              text='Dermatologists'
              label='view doctor profile'
              path='/displayDoctorCard/Dermatologists'
            />
             </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://badralsamaahospitals.com/public/uploads/speciality/temp/2019/May/promo-endocrinology-800x4681557818226197.jpg'
              text='Endocrinologists '
              label='view doctor profile'
              path ='/displayDoctorCard/Endocrinologists'
            />
            <CardItem
              src='https://kauveryhospital.com/blog/wp-content/uploads/2021/02/dreamstime_xxl_107997601.jpg'
              text='Gastroenterologists'
              label='view doctor profile'
              path='/displayDoctorCard/Gastroenterologists'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8brobViC4blX7wnO1vz17u2gTngFsVGvSA&usqp=CAU'
              text='Anesthesiologists'
              label='view doctor profile'
              path='/displayDoctorCard/Anesthesiologists'
            /> 
          </ul>
          
        </div>
      </div>
      
      </div>

        </>
      );
}
    export default ViewDoctorCard;
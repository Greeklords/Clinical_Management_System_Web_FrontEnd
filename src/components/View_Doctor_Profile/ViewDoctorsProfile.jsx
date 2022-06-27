import React,{useState,useEffect} from "react";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import './/ViewDoctorsProfile.css';


function ViewDoctorsProfile(){
  
         return (
        
        
            <div>

            <div className="container">
            <div className="header">
            <h1>Specialist Consultations</h1><br/>
            </div>
            <img src="https://mansoorpediatrics.com/wp-content/uploads/2018/01/Recognizing-Urgent-Symptoms-When-You-Should-Take-Your-Child-to-the-Doctor.jpg" height={400} width={1200} /><br/><br/>
            <div className="para-body">
            <p>Our primary goal as health care providers is to place our patients first through clinical excellence and compassionate care. That starts with helping you locate the right consultant to lead you on your journey to better health and well-being. Designed with Modular channel areas for added privacy the Specialist Center provides the widest array of services and a team of expert consultants belonging to numerous medical specialities, providing comprehensive, personalised care.</p>
            <ul >
                <li>We have specialists in ALL the fields of healthcare at the Chamal MediCare.</li>
                <li>Appointments can be taken over the phone at any time</li>
                <li>Hospital enquiry hotline works round the clock.</li>
                <li>Comfortable waiting space</li>
                <li>Facilities for all services under the same roof</li>
                <li>Public Relation Officer helps the patient at the channelling reception or OPD entrance</li>
                <li>Lab facilities are available.</li>
             </ul> 
            </div>
            <a class="btn btn-primary" href="/viewDoctorCard" role="button">View Doctor Categories</a>
        </div>
            <div class="doc_footer">
      
      <AfterloginFutter />
      </div>
            
        </div>
                
         );

}

export default ViewDoctorsProfile;
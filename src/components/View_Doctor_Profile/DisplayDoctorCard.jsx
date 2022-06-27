import React,{useState,useEffect} from "react";
import axios from "axios"; 
import { useParams } from 'react-router-dom';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import './ViewDoctorsProfile.css';

//import Data from './data';
//import  from 'react/cjs/react.production.min';


const DisplayDoctorCard =()=>{
  //const [persondata,setPersonData]=useState([])
  const [filterData,setFilterData]=useState([])

  const [users,setUsers] = useState([]);
  const params = useParams()

 /*  const getAllUser = async () => {
    const response = await fetch("http://localhost:4000/profile/displaydoctors");
    setUsers(await response.json());
    console.log(users);
}; */
const getAllUser =() => {
    axios.get(`http://localhost:4000/profile/displaydoctorscategory/${params.id}`)
    .then(res=>setUsers(res.data))
    .catch(err=>{console.log(err);})
    console.log(users);
    
};


    useEffect(() => {
       getAllUser();
     


    },[]);
    
    

  
    const doctorFilterData=(e)=>{
        console.log(e);
        getAllUser();
       
        if(e=="cardiologists"){
            var filteredData= users.filter((users)=>{
                 return users.category=="Cardiologists"
             })
         }
         if(e=="endocrinologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Endocrinologists"
              })
          }
          if(e=="gastroenterologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Gastroenterologists"
              })
          }
          if(e=="obstetrician"){
              var filteredData= users.filter((users)=>{
                   return users.category=="Obstetrician"
               })
           }
           if(e=="dermatologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Dermatologists"
              })
          }

         setFilterData(filteredData)
        }
    
         return (        <>
        
            <div className="para-body" >
            <div className="container" >
                <h1>{params.id}</h1>
        </div>

<div className="container">
    
                <div className="row">
                    {
                       users.map((data)=>{

                            return <div key={data._id} className="col-md-4">
                                    <div className="card mt-3">
                                        <div className="card-header bg-dark text-white">
                                           <h5>{data.fullName}</h5>
                                        </div>
                                        <div className="card-body">
                                             {data.image}
                                            <ul>
                                            
                                             <li>Type:{data.type}</li>
                                            <li>Full Name:{data.fullName}</li>
                                            <li>Degree:{data.degree}</li>
                                            <li>Experience:{data.experience}</li>
                                            <li>Language:{data.languages}</li>
                                            <li>Category:{data.category}</li>
                                            <li>Speciality:{data.speciality}</li>
                                            <li>Contact Number:{data.phoneNumber}</li>
                                            <li>Email:{data.email}</li>
                                             </ul>
                                        {data.image===''?<h5>image display</h5>:null}
                                            <a class="btn btn-primary" href="/doc" role="button">view doctor schedual</a>
                                        </div>
                                    </div>
                                </div>
                            
                        })
                    }

                </div>
            </div>  
            <div class="doc_footer">
      <AfterloginFutter />
      </div>
        </div>
        </>       
         );

}
export default DisplayDoctorCard;
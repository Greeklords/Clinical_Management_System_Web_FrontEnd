import React, { useState, useEffect } from "react";
import axios from "axios";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
import './LabReportIssue.css';
import { jsPDF } from "jspdf";

function LabReportIssue() {

    /*const [filterData, setFilterData] = useState([])
    var rep_no="62a8875919e861bc9cd29918";
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/MedicalReports/?id="+rep_no);
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
        
    }, []);*/

   /* const doctorFilterData=(e)=>{
        //e=bh65434232321;
        console.log(e.target.value);
        
        if(e.target.value=="bh65434232321"){
            var filteredData= users.filter((users)=>{
                 return users.reciep_no=="bh65434232321"
             })
         }
         
         setFilterData(
           
            filteredData
        )
    }
    doctorFilterData();*/
    const doc = new jsPDF();
    return (
        
        <>
        
         <table className="lab-form-center">
         <tr>
             <td colspan="2" className="col">
                 <h2>Chamal Medicare Laboratory</h2>
                 <p>No.72/1,Chamal Medicare,Meegahathanna /+94 771133562 / 011-2945623</p>
                 
                 <h1>Lab Report</h1>
             </td>
          
         </tr>
         <br/><br/>
         <div className="colu2">
         <tr>
             <td>Name of the patient:-</td>
             {/*<td>{e.firstname}&nbsp;{e.lastname}</td>*/}
         </tr>
         <tr>
             <td>Collected Date:-</td>
             {/*<td>{e.collectedDate} </td>*/}
         </tr>
         <tr>
             <td>Date Of Birth:-</td>
            {/* <td>{e.dob}</td>*/}
         </tr>
         <tr>
             <td>Age:-</td>
            {/* <td>{e.age}</td>*/}
         </tr>
         <tr>
             <td>Mobile Number:-</td>
             {/*<td>{e.mobileno}</td>*/}
         </tr>
         <tr>
             <td>Email Address:-</td>
             {/*<td>{e.email}</td>*/}
         </tr>
         <tr>
             <td>Address Of Residence:-</td>
            {/* <td>{e.address}</td>*/}
         </tr>
         
         <tr>
             <td>Lab Report Description:-</td>
            {/* <td>{e.des}</td>*/}
         </tr>

         
         <tr>  
             <p></p>
         </tr>
         <tr> <p></p></tr>
         <tr> <p></p></tr>
         <tr> <p></p></tr><tr> <p></p></tr><tr> <p></p></tr>
         
         <tr className="tr11">
             <td>Dr.Shiromi Rajeev Siriwardhana</td>
         </tr>
         <tr> <td>MBBS,MD</td>
         </tr>
         <tr>
             <td>(Laboratory Inspector)</td>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {/* <td>{e.issuue_date}</td>*/}
         </tr>
         <tr>
             <td>...........................................</td>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             <td>.........................</td>
         </tr>
         <tr>
             <td>Signature of Lab Officer</td>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
             <td>Issued date</td>
         </tr>
         </div>
         <br/><br/><br/>
         <tr >  
           
           <p class="text-p mb-0 py-2 px-10">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
            
         </tr>
        

     </table>
    
   
           
          

        </>
    );
    doc.save('Test.pdf');
}

export default LabReportIssue;
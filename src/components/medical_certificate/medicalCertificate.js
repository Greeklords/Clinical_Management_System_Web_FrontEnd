import React, { useState, useEffect } from "react";
import axios from "axios";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
import './medicalCertificate.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function MedicalCertificate() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const a = urlParams.get('appinmentid');

    const [filterData, setFilterData] = useState([])
    //var rep_no="62a8875919e861bc9cd29918";
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/MedicalReports/");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();

    }, []);
    
  
    const doctorFilterData = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.reciep_no == a;
        })

        setFilterData(

            filteredData
        );


    }
    //doctorFilterData("62a8875919e861bc9cd29918");
    const genPDF = () => {
        const doc = new jsPDF({
            orientation: "landscape",
           
          });
        doc.setFontSize(20);
        doc.text("Deliver Details", 10,10);
    
        doc.autoTable({
          html: 't1'
        })
        doc.save('Deliver Details.pdf');
      }

    return (

        <><div><button onClick={doctorFilterData}>kjkkkjkj</button></div>
        <div><button onClick={genPDF}>dddd</button></div>
            
            {filterData.map((ce) => (
                
                <table className="center" name="t1">
                    <tr>
                        <td colspan="2" className="col">
                            <h2>Chamal Medicare</h2>
                            <h4>chamal,Meegahathanna.</h4>
                            <h1>MEDICAL CERTIFICATE</h1>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Name of the patient</td>
                        <td>{ce.firstname}&nbsp;{ce.lastname}</td>
                    </tr>
                    <tr>
                        <td>B.H.T.No./OPD No.</td>
                        <td>77676</td>
                    </tr>
                    <tr>
                        <td>Reciept No</td>
                        <td>{a}</td>
                    </tr>
                    <tr>
                        <td>Usual adress of Reidence</td>
                        <td>{ce.address}</td>
                    </tr>
                    <tr>
                        <td>Where employed</td>
                        <td>{ce.workingplace}</td>
                    </tr>
                    <tr>
                        <td>Nature of dissease or extent and nature of injuries found </td>
                        <td>{ce.doctorDescription}&nbsp;{ce.EffectedDate}</td>
                    </tr>
                    <tr>
                        <td>Medical officer's recommendations :-</td>
                        <td>Rcomended for {ce.recemendedDateDuration} days</td>
                    </tr>

                    <tr>
                        <td>Medical/ Accident leave with effect from</td>
                        <td>{ce.EffectedDate}</td>
                    </tr>
                    <tr>
                        <td>Special recommendations</td>
                        <td>{ce.other_recomendation}</td>
                    </tr>
                    <tr>
                        <p></p>
                    </tr>
                    <tr> <p></p></tr>
                    <tr> <p></p></tr>
                    <tr> <p></p></tr><tr> <p></p></tr><tr> <p></p></tr>
                    <tr className="tr11">
                        <td>...............................................................</td>
                        <td>...............................................................</td>
                    </tr>
                    <tr>
                        <td>Signature of patient</td>
                        <td>Signature of Medical Officer/Consu</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>Name- {ce.Designation}</td>
                    </tr>
                    <tr>
                        <td>Date - {ce.isseedDate}</td>
                        <td>Designation - {ce.DoctorName}</td>
                    </tr>
                    <tr >
                        <td td colspan="2" className="ft">
                            <p class="text-light mb-0 py-2 px-10">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
                        </td>
                    </tr>

                </table>

            ))}



        </>
    );
    
}

export default MedicalCertificate;
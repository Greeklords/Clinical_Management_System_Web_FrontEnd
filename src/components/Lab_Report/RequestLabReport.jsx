import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';


function RequestLabReport() {
    let navigate = useNavigate();
    /*var doctor_id = "62b05bd025c59c8cdd5bc318";
    var x = "doc_id="+doctor_id;*/
  
    const [filterData, setFilterData] = useState([]);
    const [Certificate, setCertificate] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/checkupDetails/displaycheckupDetails");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    
    const styles = {
        contentDiv: {
            display: "flex",
        },
        contentMargin: {
            marginLeft: "20px",
            width: "100%",
        },
    };
    const FilterData = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.report_status =="not issue" 
        })

        setFilterData(

            filteredData
        );


    }
    const Filtermedicals = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.report_status =="finished";
        })

        setCertificate(

            filteredData
        );


    }

    const mystyle = {
        background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
    }

    return (
        <div>            
            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>



                    <h1 style={{ padding: "5%" }}></h1>

                    <div className="container">

                        <div className="scheduletableH" style={mystyle}>
                            <h4>Lab Report Reqest </h4>
                        </div>
                        <div>
                            <button onClick={FilterData}>Refresh records</button>
                        </div>
                        <table className="scheduletable">

                            {users.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Date</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Requested details</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Issue Lab Certificate</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Reject request</th>
                                        <th>&emsp; &emsp;</th>
                                    </tr>

                                    <tr>
                                        <td >
                                            {ce.firstname}&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            {ce.collectedDate}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" class="btn btn-danger">View Details</button>&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" formMethod="post" class="btn btn-dark" value={ce.id} on onClick={() => { navigate(`/labReportList?uniqid=${ce._id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}&u_name=${ce.first_name}&l_name=${ce.last_name}&add=${ce.address}&company=${ce.workingplace}&reqd=${ce.reqestedDate}&e_d=${ce.Effected_Date}`)}}>Issue Certificate</button> &nbsp;
                                    </td>
                                    <td>&emsp; &emsp;</td>
                                    <td>
                                        <form>
                                            
                                        <button type="button" class="btn btn-danger"  >Reject request</button>
                                        </form>

                                          
                                    </td>
                                </tr>



                                </div>
                            ))}


                </table>

            </div>
            <br></br>
            <div className="container">

                <div className="scheduletableH" style={mystyle}>
                    <h4>Issueded Lab Report Reqest </h4>
                </div>
                <div>
                            <button onClick={Filtermedicals}>Refresh records</button>
                        </div>
                <table className="scheduletable">

                    {Certificate.map((ce) => (
                        <div key={ce.id}>
                            <tr>
                                <th>Patient Name</th>
                                <th>&emsp; &emsp;</th>
                                <th>Date</th>
                                <th>&emsp; &emsp;</th>
                                <th>Lab Certificate</th>
                                <th>&emsp; &emsp;</th>


                            </tr>


                            <tr>
                                <td >
                                {ce.first_name}&nbsp;
                                </td>
                                <td>&emsp; &emsp;</td>
                                <td>
                                    {ce.reqestedDate}
                                </td>
                                <td>&emsp; &emsp;</td>
                                <td>
                                    
                                <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => { navigate(`/labReportList?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}} onSubmit=""> Learn more</button> &nbsp;

                                </td>

                            </tr>



                        </div>
                    ))}


                </table>

            </div>

        </div>
            </div >
            <br></br><br></br><br></br><br></br><br></br>

            


        </div >
    );
}

export default RequestLabReport;
//<a href="/MedicalCertificate/?id=12345" ></a>
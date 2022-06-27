import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import { BiRefresh } from "react-icons/bi";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';
import './medicalCertificate.css';
import { FaEye } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

//FiMoreHorizontal
//FaTimes



function ReqMedicalReportList() {
    let navigate = useNavigate();
    var doctor_id = "62b05bd025c59c8cdd5bc318";
    var x = "doc_id=" + doctor_id;

    const [filterData, setFilterData] = useState([]);
    const [Certificate, setCertificate] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/MedicalRequests/");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    function sendData(e) {
        e.preventDefault();
        //var isseedDate = document.t["medical_form"]["inputDate3"].value;
        var medical_status = "rijected";
        const updateMedical = {
            medical_status
        }
        axios.put(`http://localhost:4004/MedicalRequests/update/62b0d06aebf20cae942815b4`, updateMedical).then(() => {
            alert("reqest rejected")
        }).catch((err) => {
            alert(err)
        })

    }
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
            return users.medical_status == "validated" && users.Doc_id == doctor_id;
        })

        setFilterData(

            filteredData
        );


    }
    const Filtermedicals = (e) => {

        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.medical_status == "finished";
        })

        setCertificate(

            filteredData
        );


    }

    const mystyle = {
        background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
    }
    const mystyle1 = {
        background: 'linear-gradient(to right, ##013d05, #62C99C)'
    }
    const mystyle2 = {
        background: 'linear-gradient(to right, #C83B3D ,#E7787A)'
    }

    return (
        <div className="Doctor_reg_view_1">            

            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>



                    <h1 style={{ padding: "5%" }}></h1>

                    <div className="container">

                        <div className="scheduletableH" style={mystyle}>
                            <h4>Medical Report Reqest </h4>
                        </div>
                        <div>
                            <button onClick={FilterData} class="btn btn-success"><BiRefresh
                                color='white'
                                size={25} />Refresh records</button>
                        </div>
                        <table className="scheduletable">

                            {filterData.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Date</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Requested details</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Issue Medical Certificate</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Reject request</th>
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
                                            <button type="button" class="btn btn-info " onClick={() => window.open(`/ImageView?appinmentid=${ce.appoinment_id}`, "_blank")}><FaEye color='white'
                                                size={25} />&nbsp;View Details</button>&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" formMethod="post" class="btn btn-dark" value={ce.id} on onClick={() => { navigate(`/MedicalIssueForm?uniqid=${ce._id}&doc_id=${doctor_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}&u_name=${ce.first_name}&l_name=${ce.last_name}&add=${ce.address}&company=${ce.workingplace}&reqd=${ce.reqestedDate}&e_d=${ce.Effected_Date}`) }}>< FaArrowUp

                                                color='white'
                                                size={25} />&nbsp;Issue Certificate</button> &nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <form>

                                                <button type="button" class="btn btn-danger" onClick={() => {
                                                    var medical_status = "rejected";
                                                    const updateMedical = {
                                                        medical_status
                                                    }
                                                    axios.put(`http://localhost:4004/MedicalRequests/update/${ce._id}`, updateMedical).then(() => {
                                                        alert("reqest rejected")
                                                    }).catch((err) => {
                                                        alert(err)
                                                    })
                                                }} ><FaTimesCircle
                                                        color='white'
                                                        size={25} />&nbsp;Reject request</button>
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
                            <h4>Issueded Medical Report Reqest </h4>
                        </div>
                        <div>
                            <button onClick={Filtermedicals} class="btn btn-success"><BiRefresh
                                color='white'
                                size={25} />Refresh records</button>
                        </div>
                        <table className="scheduletable">

                            {Certificate.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Date</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Medical Certificate</th>
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

                                            <button type="button" formMethod="post" class="btn btn-secondary" on onClick={() => { navigate(`/MedicalCertificate?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`) }} target="_blank"> Learn more&nbsp;<FiMoreHorizontal
                                                color='white'
                                                size={25} /></button> &nbsp;

                                        </td>

                                    </tr>



                                </div>
                            ))}


                        </table>

                    </div>

                </div>
            </div >
            <br></br>

            


        </div >
    );
}

export default ReqMedicalReportList;
//on onClick={() => { navigate(`/ImageView?appinmentid=${ce.appoinment_id}`)}}
//<a href="/MedicalCertificate/?id=12345" ></a>
//on onClick={() => { navigate(`/MedicalCertificate?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}} 
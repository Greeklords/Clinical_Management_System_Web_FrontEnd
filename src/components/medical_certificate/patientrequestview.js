import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';
import './medicalCertificate.css';
import { BiRefresh } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";//BsBoxArrowRight
import { BsArrowRightCircleFill } from "react-icons/bs";//BsArrowRightCircleFill


function Patientreq_view() {
    let navigate = useNavigate();
    var patient_id = "62b0ee748e1a2b8fb0751ece";
    var x = "patient1_id=" + patient_id;

    const [filterData, setFilterData] = useState([]);
    const [Certificate, setCertificate] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/patients/");
        setUsers(await response.json());
        console.log(users);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    //const [medical_status, setMedical_status] = useState("");
    function sendData(e) {
        e.preventDefault();

        const updateMedical = {
            'medical_status': 'ccfc'
        }
        axios.post("http://localhost:4004/MedicalReports//update/:id", updateMedical).then(() => {
            alert("Online Patient Added")
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
            return users.patientId == patient_id && users.markstatus1 == "enable";
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

    return (
        <div className="patientreqview">
            

            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>



                    <h1 style={{ padding: "5%" }}></h1>

                    <div className="container">

                        <div className="scheduletableH" style={mystyle}>
                            <h4>Appoinment which you can  request for Medical Report  </h4>
                        </div>
                        <div>
                            <button type="button" formMethod="post" class="btn btn-success" onClick={FilterData}><BiRefresh
                                color='white'
                                size={25} />Refresh records</button>
                        </div>
                        <table className="scheduletable">

                            {filterData.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                        <th>&emsp;Doctor Name</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Date</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Request for a Medical Certificate</th>
                                        <th>&emsp; &emsp;</th>

                                    </tr>

                                    <tr>
                                        <td >
                                            {ce.doctorname}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            {ce.date}
                                        </td>
                                        <td>&emsp; &emsp;</td>

                                        <td>&emsp; &emsp;&emsp;&emsp;
                                            <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => { navigate(`/Img_uplad?id=${ce._id}&edate=${ce.date}`) }}>Request&nbsp;<BsArrowRightCircleFill
                                                color='white'
                                                size={25} /></button> &nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                    </tr>



                                </div>
                            ))}


                        </table>

                    </div>
                    <br></br>
                    <div className="container">


                        <div>
                            <button type="button" formMethod="post" class="btn btn-info" onClick={() => { navigate(`/UserresView?id=${patient_id}`) }}>View report status <BsBoxArrowRight
                                color='white'
                                size={25} /></button>
                        </div>


                    </div>

                </div>
            </div >
            <br></br>

            

        </div >

    );
}

export default Patientreq_view;
//<a href="/MedicalCertificate/?id=12345" ></a>
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';


function ConfirmNewSchedule() {
    let navigate = useNavigate();
    var doctor_id = "62b05bd025c59c8cdd5bc318";
    var x = "doc_id="+doctor_id;
  
    const [filterData, setFilterData] = useState([]);
    const [Certificate, setCertificate] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4004/MedicalRequests/");
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
            'medical_status':'ccfc'
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
            return users.medical_status !="finished";
        })

        setFilterData(

            filteredData
        );


    }
    const Filtermedicals = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.medical_status =="finished";
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
            <HeaderDoctorProfile />

            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>



                    <h1 style={{ padding: "5%" }}></h1>

                    <div className="container">

                        <div className="scheduletableH" style={mystyle}>
                            <h4>Medical Report Reqest </h4>
                        </div>
                        <div>
                            <button onClick={FilterData}>Refresh records</button>
                        </div>
                        <table className="scheduletable">

                            {filterData.map((ce) => (
                                <div key={ce.id}>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Date</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Request details</th>
                                        <th>&emsp; &emsp;</th>
                                        <th>Reject request</th>
                                        <th>&emsp; &emsp;</th>
                                    </tr>

                                    <tr>
                                        <td >
                                            {ce.User_id}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            {ce.reqestedDate}
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" class="btn btn-danger">View Details</button>&nbsp;
                                        </td>
                                        <td>&emsp; &emsp;</td>
                                        <td>
                                            <button type="button" formMethod="post" class="btn btn-dark" on onClick={() => { navigate(`/MedicalIssueForm?doc_id=${doctor_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}}>Issue Certificate</button> &nbsp;
                                    </td>
                                    <td>&emsp; &emsp;</td>
                                    <td>
                                        <form>
                                        <button type="submit" class="btn btn-danger" >Reject request</button>
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
                                <th>Medical Certificate</th>
                                <th>&emsp; &emsp;</th>


                            </tr>


                            <tr>
                                <td >
                                    {ce._id}
                                </td>
                                <td>&emsp; &emsp;</td>
                                <td>
                                    {ce.reqestedDate}
                                </td>
                                <td>&emsp; &emsp;</td>
                                <td>
                                <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => { navigate(`/MedicalCertificate?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}}> Learn more</button> &nbsp;

                                </td>

                            </tr>



                        </div>
                    ))}


                </table>

            </div>

        </div>
            </div >
            <br></br>

            <div class="footer-c py-2">
                <div class="container text-center">
                    <p class="text-light mb-0 py-2">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
                    <h6 class="text-light mb-0 py-2">Solution by Greeklords</h6>
                </div>
            </div>


        </div >
    );
}

export default ConfirmNewSchedule;
//<a href="/MedicalCertificate/?id=12345" ></a>
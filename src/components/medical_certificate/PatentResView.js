import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import { BiRefresh } from "react-icons/bi";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';


function UserresView() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u_id = urlParams.get('id');
    let navigate = useNavigate();
    var doctor_id = "62b05bd025c59c8cdd5bc318";
    var x = "doc_id="+doctor_id;
  
    const [filterData, setFilterData] = useState([]);
    const [Certificate, setCertificate] = useState([]);
    const [users, setUsers] = useState([]);
    const [RejectData, setRejectData] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/MedicalRequests/");
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
            return users.User_id ==u_id && (users.medical_status!="finished"||users.medical_status!="rejected");
        })

        setFilterData(

            filteredData
        );


    }
    const FilterReject = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.User_id ==u_id && users.medical_status=="rejected";
        })

        setRejectData(

            filteredData
        );


    }
    const Filtermedicals = (e) => {
 
        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users.medical_status =="finished" && users.User_id ==u_id;
        })

        setCertificate(

            filteredData
        );


    }

    const mystyle = {
        background: 'linear-gradient(to right, #E3B61A, #F9E28F)'
    }
    const mystyle1 = {
        background: 'linear-gradient(to right, #088750, #62C99C)'
    }
    const mystyle2 = {
        background: 'linear-gradient(to right, #C83B3D ,#E7787A)'
    }

    return (
        <div className="">
           

            <div style={styles.contentDiv}>

                <div style={styles.contentMargin}>



                    <h1 style={{ padding: "5%" }}></h1>

                   
            <div className="container">

                <div className="scheduletableH" style={mystyle1}>
                    <h4>Issueded Medical Report </h4>
                </div>
                <div>
                            <button onClick={Filtermedicals} formMethod="post" class="btn btn-success"><BiRefresh
                                color='white'
                                size={25} />Refresh records</button>
                        </div>
                <table className="scheduletable">

                    {Certificate.map((ce) => (
                        <div key={ce.id}>
                            <tr>
                                <th>&emsp;Patient Name</th>
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
                                    
                                <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => { navigate(`/MedicalCertificate?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}} onSubmit=""> Learn more</button> &nbsp;

                                </td>

                            </tr>



                        </div>
                    ))}


                </table>

            </div>
            <div className="container">

<div className="scheduletableH" style={mystyle}>
    <h4>Pendding Medical Report </h4>
</div>
<div>
    <button onClick={FilterData} formMethod="post" class="btn btn-success"><BiRefresh
        color='white'
        size={25} />Refresh records</button>
</div>
<table className="scheduletable">

    {filterData.map((ce) => (
        <div key={ce.id}>
            <tr>
             
                <th>&emsp;Patient Name</th>
                <th>&emsp; &emsp;</th>
                <th>Date</th>
                <th>&emsp; &emsp;</th>
                <th>Requested details</th>
                <th>&emsp; &emsp;</th>
                <th>&emsp; &emsp;</th>
            </tr>

            <tr>
                <td >
                    {ce.first_name}&nbsp; {ce.last_name}
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
                

            <td>&emsp; &emsp;</td>
            
        </tr>



        </div>
    ))}


</table>

</div>
<br></br>
            <div className="container">

<div className="scheduletableH" style={mystyle2}>
    <h4>Rejecteded Medical Report</h4>
</div>
<div>
            <button onClick={FilterReject} formMethod="post" class="btn btn-success"><BiRefresh
                                color='white'
                                size={25} />Refresh records</button>
        </div>
<table className="scheduletable">

    {RejectData.map((ce) => (
        <div key={ce.id}>
            <tr>
                <th>&emsp;Patient Name</th>
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
                    
                <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => { navigate(`/MedicalCertificate?doc_id=${ce.Doc_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}`)}} onSubmit=""> Learn more</button> &nbsp;

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

export default UserresView;
//<a href="/MedicalCertificate/?id=12345" ></a>
import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
//navigate('/contacts');
//import '../components/OnlinePatientAdd.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import './form.css';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';// Greeklords6CMS@gmail.com Greeklords#6
import { storage } from "./firabase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { Link, Routes, Route, useNavigate } from 'react-router-dom'
//import { FiSend } from "react-icons/fi";

function ReqestForm() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u_id = urlParams.get('id');
    var Imageurl;


    const [filterData, setFilterData] = useState([]);
    const [users, setUsers] = useState([]);
    const [patients, setpatients] = useState([]);
    const [patientsFilter, setpatientsFilter] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/patients/");
        setUsers(await response.json());
        console.log(users);
    };
    const getAllpatients = async () => {
        const response = await fetch("http://localhost:4000/doctors/");
        setpatients(await response.json());
        console.log(users);
    };


    useEffect(() => {
        getAllUser();

    }, []);
    useEffect(() => {
        getAllpatients();

    }, []);

    const doctorFilterData = (e) => {

        console.log(e.target.value);
        var filteredData = users.filter((users) => {
            return users._id == u_id;
        })

        setFilterData(

            filteredData
        );



    }


    const navigate = useNavigate();
    function sendData(e) {
        e.preventDefault();
        var first_name = document.forms["medical_form"]["first_name"].value;
        var last_name = document.forms["medical_form"]["lastName"].value;
        var Doc_id = document.forms["medical_form"]["d_id"].value;//d_id
        var User_id = document.forms["medical_form"]["p_id"].value;//p_id
        var OPD_no = document.forms["medical_form"]["OPD_no"].value;
        var appoinment_id = document.forms["medical_form"]["rec_no"].value;
        var workingplace = document.forms["medical_form"]["workingplace"].value;
        var address = document.forms["medical_form"]["address"].value;
        var reqestedDate = document.forms["medical_form"]["inputDate2"].value;
        var Effected_Date = document.forms["medical_form"]["inputDate1"].value;
        var medical_status = document.forms["medical_form"]["status"].value;//status

        const updateMedical = {
            User_id,
            Doc_id,
            OPD_no,
            appoinment_id,
            workingplace,
            medical_status,
            first_name,
            last_name,
            address,
            reqestedDate,
            Effected_Date,
            Imageurl
        }
        var markstatus1 = "disable";
        axios.post("http://localhost:4000/MedicalRequests/add", updateMedical).then(() => {
            alert("Medical report issued")
        }).catch((err) => {
            alert(err)
        })
        const updatedMedical = {
            markstatus1
        }
        axios.put(`http://localhost:4000/patients/update/${u_id}`, updatedMedical).then(() => {
            alert("Medical staus updated")
        }).catch((err) => {
            alert(err)
        })
        navigate(`/Patientreq_view/id=${u_id}`);
        //navigate(`/Signaturepadarea?doc_id=${DoctorName}`);//`/MedicalIssueForm?doc_id=${doctor_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}&u_name=${ce.first_name}&l_name=${ce.last_name}&add=${ce.address}&company=${ce.workingplace}&reqd=${ce.reqestedDate}&e_d=${ce.Effected_Date}`
    }

    /* {filterData.map((ce) => (
                                 <p>{urlap}</p>
                             ))};*/
    return (
        <>
            <div className="Doctor_reg_view">

                

                <div className="form" onSubmit={sendData} onClick={doctorFilterData}>

                    <form className="formDoc was-validated" name="medical_form">
                        <h2>---Medical Request Form---</h2>
                        {filterData.map((ce) => (
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom01">First name of the patient</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name" value={ce.firstname} placeholder="first name" required />
                                    <div class="invalid-feedback">Please enter first name</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom02">Last name of the patient</label>
                                    <input type="text" class="form-control" name="lastName" id="lastName" value={ce.lastname} placeholder="last name" required />
                                    <div class="invalid-feedback">Please enter last name</div>
                                </div>

                            </div>


                        ))};
                        {filterData.map((ce) => (
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom01">ID of the Doctor</label>
                                    <input type="text" class="form-control" name="d_id" id="d_id" value={ce.Doc_id} placeholder="first name" required />
                                    <div class="invalid-feedback">Please enter first name</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationCustom02">ID of the patient</label>
                                    <input type="text" class="form-control" name="p_id" id="p_id" value={ce.patientId} placeholder="last name" required />
                                    <div class="invalid-feedback">Please enter last name</div>
                                </div>

                            </div>


                        ))};

                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">OPD_no</label>
                                <input type="text" class="form-control" name="OPD_no" id="OPD_no" value="7890" placeholder="OPD_no" required />
                                <div class="invalid-feedback">Please enter OPD_no</div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom04">recieption number</label>
                                <input type="text" class="form-control" name="rec_no" id="rec_no" value={u_id} placeholder="recieption number" required />
                                <div class="invalid-feedback">Please enter recieption number</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="validationCustom05" >working place</label>
                            <input type="text" class="form-control" name="workingplace" id="workingplace" placeholder="workingplace" required />
                            <div class="invalid-feedback">Please enter working place</div>
                        </div>

                        {filterData.map((ce) => (
                            <div class="form-group">
                                <label for="validationCustom06">Adress</label>
                                <input type="text" class="form-control" name="address" id="address" value={ce.address} placeholder="1234, Main St, ...." required />
                                <div class="invalid-feedback">Please enter Adress</div>
                            </div>


                        ))};

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputDate1">Effected Date</label>
                                <input type="Date" class="form-control" name="inputDate1" id="inputDate1" placeholder="Reqested Date" required />
                                <div class="invalid-feedback">Please enter Reqested Date</div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputDate2">Reqested Date</label>
                                <input type="Date" class="form-control" name="inputDate2" id="inputDate2" placeholder="Reqested DateEffectedDate" required />
                                <div class="invalid-feedback">Please enter Effected Date</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="validationCustom06">status</label>
                            <input type="text" class="form-control" name="status" id="status" value="notValidated" placeholder="1234, Main St, ...." required />
                            <div class="invalid-feedback">Please enter Adress</div>
                        </div>

                        <br />

                        <button type="submit" class="btn btn-primary">Submit Details&nbsp;<FiSend
                            color='white'
                            size={25} />
                        </button>


                    </form>





                </div>
                <div class="doc_footer">
                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                    <br /><br />
                    <AfterloginFutter />
                </div>
            </div>

        </>

    );

}

export default ReqestForm;
//{filterData.map((ce) => ())};
/*<div class="doc_footer">

                        <AfterloginFutter />
                        </div> */
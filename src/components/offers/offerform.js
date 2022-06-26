import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
//navigate('/contacts');
//import '../components/OnlinePatientAdd.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import '../medical_certificate/form.css';
import { useParams } from 'react-router-dom';

import 'jspdf-autotable';// Greeklords6CMS@gmail.com Greeklords#6


function OfferForm() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u_id = urlParams.get('id');
    var Imageurl;

    const current = new Date();
    const today = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    

    const navigate = useNavigate();
    function sendData(e) {
        e.preventDefault();
        var head = document.forms["medical_form"]["Title"].value;
        var date = document.forms["medical_form"]["inputDate2"].value;
        var description = document.forms["medical_form"]["status"].value;//d_id
    

        const updateMedical = {
        head,
        description,
        date
        }
        var markstatus1 = "disable";
        axios.post("http://localhost:4004/offers/add", updateMedical).then(() => {
            alert("offer is issued")
        }).catch((err) => {
            alert(err)
        })
        
       
        
        //navigate(`/Signaturepadarea?doc_id=${DoctorName}`);//`/MedicalIssueForm?doc_id=${doctor_id}&id=${ce.User_id}&appinmentid=${ce.appoinment_id}&u_name=${ce.first_name}&l_name=${ce.last_name}&add=${ce.address}&company=${ce.workingplace}&reqd=${ce.reqestedDate}&e_d=${ce.Effected_Date}`
    }

    /* {filterData.map((ce) => (
                                 <p>{urlap}</p>
                             ))};*/
    return (
        <>
            <div className="Doctor_reg_view">

                <HeaderDoctorProfile />

                <div className="form" onSubmit={sendData} >

                    <form className="formDoc was-validated" name="medical_form">
                        <h2>---Offers Issue Form---</h2>
                        <div class="form-group">
                            <label for="validationCustom06">Title</label>
                            <input type="text" class="form-control" name="Title" id="Title"  placeholder="Title" required />
                            <div class="invalid-feedback">Please enter Title</div>
                        </div>

                        <div class="form-row">
                            
                            <div class="form-group ">
                                <label for="inputDate2">Date</label>
                                <input type="Date" class="form-control" name="inputDate2" id="inputDate2"  placeholder="Reqested DateEffectedDate" required />
                                <div class="invalid-feedback">Please enter Effected Date</div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="validationCustom06">Description</label>
                            <input type="text" class="form-control" name="status" id="status"  placeholder="1234, Main St, ...." required />
                            <div class="invalid-feedback">Please enter Adress</div>
                        </div>

                        <br />

                        <button type="submit" class="btn btn-primary" id="goForm">Submit Details&nbsp;<FiSend
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

export default OfferForm;
//{filterData.map((ce) => ())};
/*<div class="doc_footer">

                        <AfterloginFutter />
                        </div> */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import HeaderDoctorProfile from "../HeaderDoctorProfile";
//import SidebarHeader from "../sidebar/SidebarHeader";
//import Sidebar_Admin from "../sidebar/Admin.sidebar";
//import '../../Styles/userdashboard.css';
import './medicalCertificate.css';
import { BiRefresh } from "react-icons/bi";
//import { BsBoxArrowRight } from "react-icons/bs";//BsBoxArrowRight
import { BsArrowRightCircleFill } from "react-icons/bs";//BsArrowRightCircleFill
import './medicalCertificate.css';



function ImageView() {
    let navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const reciptNumber = urlParams.get('appinmentid');
    //reciptNumber="hgfgdsas598";

    const [filterData, setFilterData] = useState([]);
    const [users, setUsers] = useState([]);
    const getAllUser = async () => {
        const response = await fetch("http://localhost:4000/image/");
        setUsers(await response.json());
        console.log(users);
        //FilterData();
    };

    useEffect(() => {
        getAllUser();
    }, []);

    //const [medical_status, setMedical_status] = useState("");

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
            return users.reciptNumber == reciptNumber;
        })

        setFilterData(

            filteredData
        );


    }

    const mystyle = {
        background: 'linear-gradient(to right, #0093AB, #9dc6e0)'
    }

    return (
        <>
            <p>hgffff</p>
            <button onClick={FilterData}>Refresh records</button>
            <br/><br/><br/><br/>
            {filterData.map((ce) => (
                <div>
                    <img src={ce.ImgURL} alt="Girl in a jacket" className="img1"></img>
                    <br/><br/><br/>
                </div>
                
                
            ))}

        </>
    );

}

export default ImageView;
//<a href="/MedicalCertificate/?id=12345" ></a>
/*{filterData.map((ce) => ())}
    */

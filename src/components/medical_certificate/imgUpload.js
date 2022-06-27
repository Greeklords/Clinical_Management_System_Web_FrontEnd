import { useState } from "react"
import { storage } from "./firabase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { FiSend } from "react-icons/fi";
import './form.css';
import axios from "axios";



function Imguplad() {

    const navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const u_id = urlParams.get('id');
    

    // State to store uploaded file
    const [file, setFile] = useState("");

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {

        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    // sendData(url);
                    const ImgURL = url;
                    const reciptNumber=u_id;
                    
                    const saveimage = {
                        reciptNumber,
                        ImgURL
                    }
                    axios.post("http://localhost:4000/image/add", saveimage).then(() => {
                        alert("Image uploaded")
                    }).catch((err) => {
                        alert(err)
                    })
                 
                    //navigate(`/Patientreq_view`);
                   // navigate(`/ReqestForm?id=${u_id}`);
                });
            }
        );
    };


    return (
        <div>
           
                <h2>---Image Upload for Medical Reqest---</h2>

                <div class="col-md-10 mb-3">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" onChange={handleChange} accept="/image/*" required />
                    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                    <div class="invalid-feedback">Example invalid custom file feedback</div>
                </div>

                <div>
                    <button type="button" class="btn btn-primary" onClick={handleUpload} ><FiSend
                        color='white'
                        size={25} />Upload </button>

                    <p>{percent} "% done"</p>
                    <button type="button" formMethod="post" class="btn btn-danger" on onClick={() => {navigate(`/ReqestForm?id=${u_id}`);}}>Request</button> &nbsp;
                </div>

            

        </div>
    );
}

export default Imguplad;
/*<div>
              <input type="file" onChange={handleChange} accept="/image/*" />
              <button onClick={handleUpload}>Upload to Firebase</button>
              <p>{percent} "% done"</p>
          </div> */


       //   <form className="was-validated" name="medical_form" onSubmit={handleUpload}></form>
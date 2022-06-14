import React,{useState} from "react";
import '../../Styles/index.css';
import Header from "../Header";
import axios from "axios";


export default function DoctorProfile() {

    const [type,setType] = useState("");
    const [fullName,setFullName] = useState("");
    const [degree,setDegree] = useState("");
    const [experience,setExperience] = useState("");
    const [languages,setLanguages] = useState("");
    const [category,setCategory] = useState("");
    const [speciality,setSpeciality] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");

    function sendData(e){
      e.preventDefault();

      const newDoctorProfile = {
        type,
        fullName,
        degree,
        experience,
        languages,
        category,
        speciality,
        phoneNumber,
        email,
      }

      axios.post("http://localhost:4000/profile/addProfile",newDoctorProfile).then(()=>{
        alert("Doctor Profile Added")
      }).catch((err)=>{
        alert(err)
      })
}

  return(
    <div>

    <Header/>

      <div class="shadowDProfile shadow-lg p-4 mb-5 bg-white">
      <form onSubmit={sendData}>
        <h1></h1>
        <h2>-------Doctor Profile-------</h2>
        <h1></h1>
    <div class="form-row">

    <div class="col-12">
        <label for="validationCustom03">Type</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Dr." required
        onChange={(e)=>{
          setType(e.target.value);
        }}
        />
      </div>

      <div class="col-12">
        <label for="validationCustom03">Full Name</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Full Name" required
        onChange={(e)=>{
          setFullName(e.target.value);
        }}
        />
      </div>

    <div class="col-12">
        <label for="validationCustom03">Degree</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Degree" required
        onChange={(e)=>{
          setDegree(e.target.value);
        }}
        />
      </div>

      <div class="col-12">
        <label for="validationCustom03">Experience</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Experience" required
        onChange={(e)=>{
          setExperience(e.target.value);
        }}
        />
      </div>

      <div class="col-12">
        <label for="validationCustom03">Languages</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Languages" required
        onChange={(e)=>{
          setLanguages(e.target.value);
        }}
        />
      </div>

      <div class="col-12">
        <label for="validationCustom03">Category</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Category" required
        onChange={(e)=>{
          setCategory(e.target.value);
        }}
        />
      </div>

    <div class="col-12">
        <label for="validationCustom03">Speciality</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Speciality" required
        onChange={(e)=>{
          setSpeciality(e.target.value);
        }}
        />
      </div>

      <div class="col-12">
        <label for="validationCustom03">Phone Number</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Phone Number" required
        onChange={(e)=>{
          setPhoneNumber(e.target.value);
        }}
        />
        <div class="invalid-feedback">
          Please provide a valid phone number.
        </div>
      </div>

      <div class="col-12">
        <label for="validationCustom03">Email</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        />
        <div class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>

    </div>
    <br/>
    <button class="signup btn btn-primary" type="submit">Create Doctor Profile</button>

  </form>
  </div>

      </div>
  )
}


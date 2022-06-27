import React ,{useState} from "react";
import './CheckUpDetails.css';
import HeaderDoctorProfile from "../HeaderDoctorProfile";
import AfterloginFutter from "../AfterloginFutter";
import axios from "axios"; 

function CheckUpDetails(){

  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [collectedDate,setCollectedDate]=useState("");
  const [dob,setDOB]=useState("");
  const [age,setAge]=useState("");
  const [mobileno,setMobileNo]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [report_status,setReportStatus]=useState("");
    
  function sendData(e){
    e.preventDefault();

    const checkupDetails = {        
     
      firstname,
      lastname,
      collectedDate,
      dob,
      age,
      mobileno, 
      email,
      address,
      report_status,      
    }
    
    axios.post("http://localhost:4000/checkupDetails/addcheckupDetails",checkupDetails).then(()=>{
      alert("Check-up deatails Added")      
    }).catch((err)=>{
      alert(err)
    })
    
  }

    return(
      <>
      <div className="ckeck-up-form" >
      
      <div className="form">
      <div className="container">
      <form className="was-validated" onSubmit={sendData}>
      <div>
          <h3 className="text">---Patient Check-up Details---</h3>
      </div>

      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom05">First name</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="first name" required
       onChange={(e)=>{
        setFirstName(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please enter first name</div>
      </div>

      <div class="col-md-6 mb-3">
      <label for="validationCustom06">Last name</label>
      <input type="text" class="form-control" id="validationCustom06" placeholder="last name"  required
       onChange={(e)=>{
      setLastName(e.target.value);
        }} 
      />
      <div class="invalid-feedback">Please enter last name</div>
      </div>
      </div>

      <div class="form-row">
      <div className="col-md-6 mb-3">
      <label for="validationDate" >Collected Date</label>
      <input type="date" class="form-control" id="validationDate" name="collected date" required
       onChange={(e)=>{
        setCollectedDate(e.target.value);
      }}
      />
      <div class="invalid-feedback">Please enter collected date.</div>
      </div>
      
      
      <div className="col-md-6 mb-3">
      <label for="validationDate" >Date of Birth</label>
      <input type="date" class="form-control" id="validationDate" name="date" required
       onChange={(e)=>{
        setDOB(e.target.value);
      }}
      />
      <div class="invalid-feedback">Please available date.</div>
      </div>
      </div>
   
      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom05">Age</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="age" required
       onChange={(e)=>{
        setAge(e.target.value);
      }}
      />
      <div class="invalid-feedback">Please enter age</div>
      </div>
      

      <div class="col-md-6 mb-3">
      <label for="validationCustom07">Mobile Number</label>
      <input type="text" class="form-control" id="validationCustom07" placeholder="+94 xxxxxxxxx" required
       onChange={(e)=>{
        setMobileNo(e.target.value);
      }}
      />
      <div class="invalid-feedback">Please enter working number</div>
      </div>
      </div>

      <div class="row-md-6 mb-3">
      <label for="vemailalidationCustom11">Email Address</label>
      <input type="text" class="form-control" id="validationCustom11" placeholder="abc@gmail.com" required
       onChange={(e)=>{
        setEmail(e.target.value);
      }}
      />
      <div class="invalid-feedback">Please enter valid email</div>
      </div>

      <div class="row-md-6 mb-3">
      <label for="validationCustom11">Home Address</label>
      <input type="text" class="form-control" id="validationCustom11" placeholder="Home address" required
      onChange={(e)=>{
        setAddress(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please enter valid address</div>
      </div>  

      <div class="row-md-6 mb-3">
      <label for="validationCustom11">Report Status</label>
      <input type="text" class="form-control" id="validationCustom11" placeholder="report status" required
      onChange={(e)=>{
        setReportStatus(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please enter report status</div>
      </div>   
      
      <div className="row"></div>
      <div className="form-group row">
      <div className="col-sm-10">
      <div class="mb-3">
      <button class=" btn btn-primary" type="submit">SUBMIT</button>
      <div class="row align-items-start">

          
      </div>
      </div>
      </div>
      </div>

      </form>

      

      </div>

    
      </div> 
      <br/><br/><br/><br/>
      <div class="doc_footer">
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <AfterloginFutter />
      </div>
      </div> 
      
      </>
        
    );

}

export default CheckUpDetails;
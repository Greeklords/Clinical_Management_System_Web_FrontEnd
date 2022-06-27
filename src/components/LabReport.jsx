import React from "react";
import '../components/LabReport.css';
import NavBar from "./navigationbar";
//import SearchBar from "./SearchBar";
import AfterloginFutter from "./AfterloginFutter";

function LabReport(){
    return(

        <>
      <div className="form-body-up">
      
     {/* <SearchBar/>*/}
      
    
      <div className="form_1" >
      <div className="container">
      <form className="form-style">
      <div class="input-icons">

    
      <label for="patientID">Enter Patient ID</label>
      <div class="input-container">
    <i class="fa fa-file-medical-alt icon"></i>
    <input class="input-field" type="text" placeholder="patient id"/>
  </div>

  <label for="patientName">Enter Patient Name</label>
  <div class="input-container">
    <i class="fa fa-user-plus icon"></i>
    <input class="input-field" type="text" placeholder="Mr.Amal Perera" />
  </div>

  <label for="email">Email Address</label>
  <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="email" placeholder="abc@gmail.com" />
  </div>

    <br/> <br/> <br/>

  <label for="formFileLg" >Select & upload Lab report</label>
  <input class="form-control form-control-lg"  type="file"/>

  <br/> <br/> <br/>
  <button class="signup btn btn-primary" type="submit">UPLOAD</button>
      <div class="row align-items-start">

          
</div></div>

   
      </form>
      </div>

      <div class="doc_footer">
      <br/>
      <AfterloginFutter />
      </div>

      </div> 
      </div> 
      
      </>
        
    )
}
export default LabReport;
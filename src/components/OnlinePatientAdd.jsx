import React ,{useState,useEffect} from "react";
import '../components/OnlinePatientAdd.css';
import HeaderDoctorProfile from "./HeaderDoctorProfile";
import AfterloginFutter from "./AfterloginFutter";
import axios from "axios"; 
import moment from "moment";

function OnlinePatientAdd(){

  const [category,setCategory]=useState("");
  const [doctorname,setDoctorName]=useState("");
  const [date,setDate]=useState("");
  const [charges,setCharges]=useState("");
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [dob,setDOB]=useState("");
  const [mobileno,setMobileNo]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
    
  function sendData(e){
    e.preventDefault();

    if(date<moment().format()){
      alert("You cannot select a previous date");
    }else{
      const newOnlinePatient = {        
        category,
        doctorname,
        date,
        charges,
        firstname,
        lastname,
        dob,
        mobileno, 
        email,
        address,      
      }
      
      axios.post("http://localhost:4000/onlinePatient/addOnline",newOnlinePatient).then(()=>{
        alert("Online Patient Added")      
      }).catch((err)=>{
        alert(err)
      })
    }

    
    
  }
//get data

  const [filterData,setFilterData]=useState([])

  const [users,setUsers] = useState([]);
  const getAllUser = async () => {
    const response = await fetch("http://localhost:4000/profile/displaydoctors");
    setUsers(await response.json());
    console.log(users);
};

    useEffect(() => {
      getAllUser();
    },[]);

//filter data
const doctorFilterData=(e)=>{
  console.log(e.target.value);
  
  if(e.target.value=="cardiologists"){
      var filteredData= users.filter((users)=>{
           return users.category=="Cardiologists"
       })
   }
   if(e.target.value=="endocrinologists"){
       var filteredData= users.filter((users)=>{
            return users.category=="Endocrinologists"
        })
    }
    if(e.target.value=="gastroenterologists"){
       var filteredData= users.filter((users)=>{
            return users.category=="Gastroenterologists"
        })
    }
    if(e.target.value=="obstetrician"){
        var filteredData= users.filter((users)=>{
             return users.category=="Obstetrician"
         })
     }
     if(e.target.value=="dermatologists"){
       var filteredData= users.filter((users)=>{
            return users.category=="Dermatologists"
        })
    }

   setFilterData(
     
      filteredData
  )
}

return(
      <>      
      <meta charSet="utf-8"/>
      <div className="form-body">
      <meta name="viewpoint" content="width=device-width, initial-scale=1.0"/>
      

      <div className="form" >
      <div className="container">
      <form className="was-validated" onSubmit={sendData}>
      <div>
          <h3 className="text">---Make an Appoinment---</h3>
      </div>
            
      <div class="form-row">

      <div class="col-md-6 mb-3">
      <label for="validationCustom01">Category</label>
      <select class="custom-select" id="validationCustom01" required
       
        onChange={(e)=>{
        setCategory(e.target.value);
        }} 
        onClick={doctorFilterData}
      >
        
        <option value="cardiologists" >Cardiologists</option>
        <option value="endocrinologists"  >Endocrinologists</option>
        <option value="gastroenterologists" >Gastroenterologists</option>
        <option value="obstetrician" >Obstetrician</option>
        <option value="dermatologists" >Dermatologists</option>
      </select>
      <div class="invalid-feedback">Please select one.</div>
      </div>
      </div>

      
      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationCustom02" >Doctor Name</label>
      <select class="custom-select" id="validationCustom02" required
       onChange={(e)=>{
        setDoctorName(e.target.value);
      }} 
      >
        <option selected disabled value="">Choose...</option>
        <option>...</option>
        {filterData.map((e, key) => {
        return <option key={key} value={e.fullName}>{e.fullName}</option>;
    })}
      </select>
      <div class="invalid-feedback">Please select one.</div>
      </div>
      </div>

           
      <div class="form-row">
      <div className="col-md-6 mb-3">
      <label for="validationDate" >Date</label>
      <input type="date"  class="form-control" id="validationDate" name="date" required

       onChange={(e)=>{
        setDate(e.target.value);
      }} 
      />
      {(date>moment().format())||(date!="")&&(<p className="p_text">You can't select a previous date</p>)}
      <div class="invalid-feedback">Please available date.</div>
      </div>

      <div class="col-md-6 mb-3">
      <label for="validationCustom04">Charges</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="Rs.xxxx" required
       onChange={(e)=>{
       setCharges(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please enter relevant charges</div>
      </div>
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
      <label for="validationDate" >Date of Birth</label>
      <input type="date" class="form-control" id="validationDate" name="date" required
       onChange={(e)=>{
        setDOB(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please available date.</div>
      </div>

      < div class="col-md-6 mb-3">
      <label for="validationCustom08">Mobile Number</label>
      <input type="text" class="form-control" id="validationCustom08" placeholder="+94xxxxxxxxx" required
       onChange={(e)=>{
        setMobileNo(e.target.value);
      }} 
      />
      <div class="invalid-feedback">Please enter working number</div></div>
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
      <label for="validationCustom12">Home Address</label>
      <input type="text" class="form-control" id="validationCustom11" placeholder="Home address" required
      onChange={(e)=>{
        setAddress(e.target.value);
      }}  
      />
      <div class="invalid-feedback">Please enter valid address</div>
      </div>

      <div className="row"></div>
      <div className="form-group row">
      <div className="col-sm-10">
      <div class="mb-3">
      <button class="signup btn btn-primary" type="submit">continue</button>
      <div class="row align-items-start">

          
      </div>
      </div>
      </div>
      </div>
          
      
      </form>
     

      </div>

      <div class="doc_footer">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <AfterloginFutter />
      </div>
      </div>  
      </div> 
      
      </>
        
    );

}

export default OnlinePatientAdd;

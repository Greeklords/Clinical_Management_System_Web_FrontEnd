//import logo from './logo.svg';
import React from "react";
import HeaderDoctorProfile from "./HeaderDoctorProfile";
import AfterloginFutter from "./AfterloginFutter";
import '../components/Payment.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

function Payment() {

const handleToken=(token,addresses)=>{
  console.log(token);
  
 axios.post("http://localhost:4000/payment/payments",{token})
  .then(res=>{if(res.status==200){
    alert("Your payment is successful!");
  }else{
     alert("Your payment is successful!");
  }})
  .catch(err=>{console.log(err)}) 
}


  /* async function handleToken(token,addresses){
  const response = await axios.post(
    "http://localhost:4000/payments",
    {token}
  );
  /* const { status } = response.data;
  console.log("Response:", response.data);
  console.log({token,addresses}); 
} */
  return (
    <>    

    <div className='payment_gate'>
    <div className="App">
      
      
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51KiUUbE07CJhQDYnBgTMbpyinPeApmoPSag8AFDu83ro6ummeDkb4uBdcdEu6Pa2n7MDXlSHRXKUbA2t5yRIcy900062OcWejT"
        amount="5000"
        name="test"
        label="Pay now with 💳"
      />
      <br/> <br/> <br/>
      <div className="sub-topic">
        <h2>Pay Your Charges Online<br/> And <br/>Book Your Appointment Today.</h2>
      </div>
    </div>
    <div class="doc_footer"> 
      <AfterloginFutter />
      </div>
    </div>
    
    </>
  );
}

export default Payment;
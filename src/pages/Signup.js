import './Signup.css'
function Signup(){
return(
<>
    <form action="#" method="POST" name="loginForm" onsubmit="return validateForm()">
        <div id="body1">
    <h1>Bank Account registeration Form</h1>
    <hr/>
    <section id="accountinfo">
        <h2 id="sectionhead">Account Information</h2><br/>
         <div class="contentbox">
         <h3> Account Type</h3>
         <select name="accounttype" id="accounttype">
            <option selected disabled value="selecttype"> Select account type</option>
            <option value="salariedaccount"> Salaried Account</option>
            <option value="savingaccount"> Saving Account</option>
            <option value="fixedaccount"> Fixed Account</option>
            <option value="calldepositaccount"> Call Deposit Account</option>
         </select>
         <h3> Currency Type</h3>
         <select name="currencytype" id="currencytype" >
            <option selected disabled value="currency"> Select Currency</option>
            <option value="AED"> AED</option>
            <option value="USD"> USD</option>
            <option value="GBP"> GPB</option>
            <option value="EURO"> EURO</option>  
         </select>
         </div>
    </section>
     
    <hr/>
    <section id="personalinfo">
        <h2 id="sectionhead">Personal Information</h2>
         <p id="personaldescription">
            The information given in this section is considered as the information of the primary account owner information.
         </p>
       
         <div class="contentbox">
            
    
        <h3 id="boldtitles">Name</h3>
        <input type="text" name="first" placeholder="First Name" 
        required /><input type="text" name="Last" placeholder="Last Name" required />
        <h3 id="boldtitles">Phone Number</h3>
        <input type="tel" name="first" placeholder="First Name" required/>
        <h3 id="boldtitles">Date of Birth</h3>
        <input type="date" name="Date" required/>
        <p id="userPasswordError"></p>
        
    

       
       <h3 id="boldtitles">Resdidental Address</h3>
       <input type="text" name="Street" placeholder="Street - optional"/> <input type="text" name="City" placeholder="City" required/> <br/>
            <select name="Country" id="Country" placeholder="" required>
                <option selected disabled value="Country"> Select Country</option>
                <option value="UAE"> United Arab Emirates</option>
                <option value="USA"> United States</option>
                <option value="SAUDI"> Saudi Arabia</option>
                <option value="KUWAIT"> Kuwait</option>
                <option value="BAHRAIN"> Bahrain</option>
                <option value="INDIA"> India</option>
                <option value="UK"> United Kingdom</option>
                <option value="FRA"> France</option>
            </select>  
     <input type="text" name="State" placeholder="State" required minlength="4"/> 
       <h3 id="boldtitles">Maritual Status</h3>
            <select name="Gender" id="Gender">
                <option value="Male"> Male</option>
                <option value="Female"> Female</option>
            </select>
       
       <br/>
       
       <p><input type="checkbox" required/>Agree to the terms and conditions </p><br/>
        <input type="submit" value="submit"/>
   
   
     
                </div> 
             
         
    </section>
    </div>
</form>
</>
);
}

export default Signup;

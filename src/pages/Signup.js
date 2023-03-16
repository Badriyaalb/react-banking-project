import './Signup.css'
import axios from "axios";
import React from "react";
import Footer from './HomeComponents/Footer';
import Header from './HomeComponents/Header';
    
class Signup extends React.Component{

    state={
        accounttype:'',
        currencytype:'',
        firstName:'',
        lastName:'',
        phonenumber:'',
        dateofbirth:'',
        street:'',
        country:'',
        city:'',
        state:'',
        maritualstatus:'',
        usercreationmsg:'',
      }
    
      storeUserData = (e)=>{
        e.preventDefault();
    
        let newUser = {
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          phonenumber:this.state.phonenumber,
          dateofbirth:this.state.dateofbirth,
          street:this.state.street,
          city:this.state.city,
          state:this.state.state,
          
        }
    
        axios.post('https://crudcrud.com/api/a6d087ea01ba4b9682e19885fa018749/users', {newUser})
        .then(
            res=>{
              console.log(res);
                console.log(res.data);
                this.setState({usercreationmsg: "User Has Been Created"})
            }    
        );
        }

          
      
        
render()
{
    return(
<div>
  <Header/>

<div id="content">
    
    <form action="#" method="POST" name="loginForm" onSubmit={this.storeUserData}>
        <div id="body1">
    <h1>Bank Account registeration Form</h1>
    <hr/>
    <section id="accountinfo">
        <h2 id="sectionhead">Account Information</h2><br/>
         <div className="contentbox">
         <h3> Account Type</h3>
         <select className="selectbuttons" name="accounttype" id="accounttype" required
          onChange={(e)=>{
            this.setState({accounttype:e.target.value})
          }}>
            <option selected disabled value="selecttype"> Select account type</option>
            <option value="salariedaccount"> Salaried Account</option>
            <option value="savingaccount"> Saving Account</option>
            <option value="fixedaccount"> Fixed Account</option>
            <option value="calldepositaccount"> Call Deposit Account</option>
         </select>
         <h3> Currency Type</h3>
         <select className="selectbuttons" name="currencytype" id="currencytype" required
          onChange={(e)=>{
            this.setState({currencytype:e.target.value})
          }}>
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
        <h2 className="titleshead" id="sectionhead">Personal Information</h2>
         <p id="personaldescription">
            The information given in this section is considered as the information of the primary account owner information.
         </p>
       
         <div className="contentbox">
            
    
        <h3 className="titleshead" id="boldtitles">Name</h3>
        <input className="inputbuttons" type="text" name="first" placeholder="First Name" 
        required
        onChange={(e)=>{
            this.setState({firstName:e.target.value})
          }} />
        <input className="inputbuttons" type="text" name="Last" placeholder="Last Name" required 
        onChange={(e)=>{
            this.setState({lastName:e.target.value})
          }}
        />
        <h3 className="titleshead" id="boldtitles">Phone Number</h3>
        <input className="inputbuttons" type="tel" name="phonenumber" placeholder="Phone Number" required
         onChange={(e)=>{
            this.setState({phonenumber:e.target.value})
          }}/>
        <h3  className="titleshead" id="boldtitles">Date of Birth</h3>
        <input className="inputbuttons" type="date" name="Date" required
        onChange={(e)=>{
            this.setState({dateofbirth:e.target.value})
          }}/>
        <p id="userPasswordError"></p>
       <h3  className="titleshead" id="boldtitles">Resdidental Address</h3>
       <input className="inputbuttons" type="text" name="Street" placeholder="Street - optional"
       onChange={(e)=>{
        this.setState({street:e.target.value})
      }}/> 
       <input  className="inputbuttons" type="text" name="City" placeholder="City" required
       onChange={(e)=>{
        this.setState({city:e.target.value})
      }}/> 
      <br/>
            <select className="selectbuttons" name="Country" id="Country" placeholder="" required
             onChange={(e)=>{
                this.setState({country:e.target.value})
              }}>
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
     <input  className="inputbuttons" type="text" name="State" placeholder="State" required minlength="4"
      
      onChange={(e)=>{
        this.setState({state:e.target.value})
      }}
        /> 
       <h3 className="titleshead" id="boldtitles">Maritual Status</h3>
            <select className="selectbuttons" name="Gender" id="Gender" onChange={(e)=>{
            this.setState({maritualstatus:e.target.value})
          }}>
                <option value="Male"> Male</option>
                <option value="Female"> Female</option>
            </select>
       
       <br/>
       
       <p><input  type="checkbox" required/>Agree to the terms and conditions </p><br/>
        <input type="submit" value="submit"/>
   
          <p id="creationmsg"> {this.state.usercreationmsg}</p>
     
      </div> 
             
         
    </section>
    </div>
</form>

</div>
<Footer/>
</div>
);
}}

export default Signup;

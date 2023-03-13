

import React from 'react';
import './Loginbox.css';
import {Link} from 'react-router-dom'

class ValidatePassword extends React.Component{

    state={
        passwordErrorLC:"",
        passwordErrorUC:"",
        passwordErrorN:"",
    }

    validatePassword = ()=>{
                let userPassword = document.forms["loginForm"]["userPassword"].value;
                let lowerCaseCheck = /[a-z]/g;
                let upperCaseCheck = /[A-Z]/g;
                let numberCheck = /[0-9]/g;
                
                document.getElementById("passwordError").innerText="";
                console.log("Test Change");
            
                if(!userPassword.match(lowerCaseCheck))
                {
                    this.setState({
                    passwordError:"lowercase required"
                    })
                }
                if(!userPassword.match(upperCaseCheck))
                {
                    this.setState({
                    passwordError:"upperrcase required"
                    })
                }
                if(!userPassword.match(numberCheck))
                {
                    this.setState({
                    passwordError:"number required"
                    })
                }
    }


    render(){
        return(
            <section > 
                <form action="" method="post" name="loginForm" id="LoginBox">
            
                    <input type="text" placeholder="Username" name="userName" id="username" required minLength="8" maxLength="20"/><br/>  
                    
                    <input type="password" placeholder="Password" name="userPassword" id="password" required minLength="10" onKeyUp={this.validatePassword}/><br/> 
                    
                    <input type="checkbox"/> Save Password/<br/> 
                   
                        <p id="passwordErrorLC">{this.state.passwordError}</p>
                        <p id="passwordErrorUC">{this.state.passwordError}</p>
                        <p id="passwordErrorN">{this.state.passwordError}</p>
                    <Link to='/Dashboard'><input id="loginButton" type="submit"/><br/></Link> 
                    
                    <a href="https://digital.mashreqbank.com/onlinebanking/">Forgot Password </a><br/> 
                    <Link to='/signup'> Sign Up</Link><br/> 
                    <a href="https://www.google.com/maps/search/mashreq+bank+-+united+arab+emirates/@24.8103472,54.5004065,9z/data=!3m1!4b1"> branchs in UAE </a> 
                </form>
            
            </section>
        )
    }
}

export default ValidatePassword;
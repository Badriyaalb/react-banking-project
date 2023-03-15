

import React from 'react';
import './Loginbox.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Loginform extends React.Component{

    state={
        users:[],
        passwordErrorLC:"",
        passwordErrorUC:"",
        passwordErrorN:"",
        username:"",
        userpassword:"",
        accountMessage:""
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>{
                let tempData = res.data;
                this.setState({ users:tempData });
            }    
        );
    }


    authenticateUser = (e)=>{
        e.preventDefault();
        console.log(this.state.users);
        console.log(this.state.username);
        console.log(this.state.userpassword);
        let flag=0;
        this.state.users.forEach(user => {
            if(user.username==this.state.username && user.address.suite==this.state.userpassword){
                flag=1;
            }
        });

        if(flag==1){
            this.setState({accountMessage:"user found"});
            window.location.href = '/dashboard';
            }
        else{
            this.setState({accountMessage:"please type a valid username"});
            }   
    }
    validatePassword = ()=>{
        
                let userPassword = document.forms["loginForm"]["userPassword"].value;
                this.setState({
                    userpassword:userPassword
                })
                let lowerCaseCheck = /[a-z]/g;
                let upperCaseCheck = /[A-Z]/g;
                let numberCheck = /[0-9]/g;
                
                document.getElementById("passwordError").innerText="";
                console.log("Test Change");
            
                if(!userPassword.match(lowerCaseCheck))
                {
                    this.setState({
                        passwordErrorLC:"lowercase required"
                    })
                }
                if(!userPassword.match(upperCaseCheck))
                {
                    this.setState({
                        passwordErrorUC:"upperrcase required"
                    })
                }
                if(!userPassword.match(numberCheck))
                {
                    this.setState({
                        passwordErrorN:"number required"
                    })
                }
    }

    render(){
        return(
            <section > 
                <form action="" method="post" name="loginForm" id="LoginBox" onSubmit={this.authenticateUser} >
            
                    <input type="text" placeholder="Username" name="userName" id="username" required minLength="2" maxLength="20"
                    onChange={(e)=>{
                        this.setState({username:e.target.value})
                    }}/><br/>  
                    
                    <input type="password" placeholder="Password" name="userPassword" id="password" required minLength="2" 
                    onKeyUp={this.validatePassword}/><br/> 
                    
                    <input type="checkbox"/> Save Password/<br/> 
                   
                        <p id="passwordErrorLC">{this.state.passwordErrorLC}</p>
                        <p id="passwordErrorUC">{this.state.passwordErrorUC}</p>
                        <p id="passwordErrorN">{this.state.passwordErrorN}</p>
                        <p id="accountMessage">{this.state.accountMessage}</p>
                        <input id="loginButton" type="submit"/><br/> 
                    
                    <a href="https://digital.mashreqbank.com/onlinebanking/">Forgot Password </a><br/> 
                    <Link to='/signup'> Sign Up</Link><br/> 
                    <a href="https://www.google.com/maps/search/mashreq+bank+-+united+arab+emirates/@24.8103472,54.5004065,9z/data=!3m1!4b1"> branchs in UAE </a> 
                </form>
            
            </section>
        )
    }
}

export default Loginform;
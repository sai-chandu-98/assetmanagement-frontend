import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            errors:{}
           
        }
    }
   formValidation=()=>{
       const{role,firstName,lastName,email,password} = this.state;
       let isValid=true;
       const errors={};
       if(role.trim()===""){
          errors.role="enter the role field"
          isValid=false;
       }
       if(firstName.trim()===""){
        errors.firstname="enter the firstname field"
        isValid=false;
       }

       if(lastName.trim()===""){
        errors.lastname="enter the lastname field"
        isValid=false;
       }
       if(email.trim()===""){
        errors.emailfield="enter the email field"
        isValid=false;
       }
       if(!email.includes("@")){
        errors.emailSymbol="email should contains @ symbol"
        isValid = false;
      }
      if(password.trim()===""){
        errors.passwordfield="enter the password field"
        isValid=false;
       }
       if(password.trim().length<8){
        errors.passwordfield="password must be atleast 8 characters"
        isValid=false;
       }
  this.setState({errors});
      return isValid;
   }
    

    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	submitHandler = e => {
		e.preventDefault()
        console.log(this.state)
        const isValid = this.formValidation();
        if(isValid){
            setTimeout(()=>{
                this.setState({show:false});
                this.props.history.push("/login");
            },1000)
        }
		axios.post('http://localhost:8090/create', this.state)
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
        
	}
    
    render() {
        const{role,firstName,lastName,email,password,errors} = this.state
        return (
            <div>
            <h3>SIGN UP</h3> 
            <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <TextField required id="outlined-basic" name="role" value={role} onChange={this.changeHandler} label="role" variant="outlined" /><br/><br/>
            <TextField required id="outlined-basic" name="firstName" value={firstName} onChange={this.changeHandler} label="firstName" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" name="lastName" value={lastName} onChange={this.changeHandler} label="lastName" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" name="email" value={email} onChange={this.changeHandler} label="email" variant="outlined" /><br/><br/>
          <TextField required id="outlined-basic" type="password" name="password" value={password} onChange={this.changeHandler} label="password" variant="outlined" /><br/><br/>
          <Button variant="contained" type="submit" color="secondary" onClick={this.submitHandler}>
          Sign Up
        </Button>
        {Object.keys(errors).map((key)=>{
            return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
     </form>
         </div>
        )
    }
}

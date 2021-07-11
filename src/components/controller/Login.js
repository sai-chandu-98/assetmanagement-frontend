import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             errors:{}
        }
    }
    changeHandler = e=>{
        this.setState({[e.target.name] : e.target.value})
    }

    formValidation=()=>{
        const{email,password}= this.state;
        let isValid=true;
        const errors = {};
        if(!email.includes("@")){
              errors.emailSymbol="email is invalid"
              isValid = false;
        }
        if(password.trim()===""){
            errors.passwordLength="please enter the password"
            isValid = false;
      }
      this.setState({errors});
      return isValid;
    }

    submitHandler = e => {
		e.preventDefault()
        const isValid = this.formValidation();
		console.log(this.state)
        if(isValid){
             setTimeout(()=>{
            this.setState({show:false});
            this.props.history.push("/employeeDetails");
        },1000)
        }
		axios.post('http://localhost:8090/login', this.state)
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
	}
    render() {
        const {id,email,password,errors} = this.state;
        return (
            <div>
            <h3>Login</h3> 
            <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
          <TextField required id="outlined-basic" name="email" value={email}  label="email" onChange={this.changeHandler} variant="outlined" /><br/><br/>
          {Object.keys(errors).map((key)=>{
            return <div style={{color:"red"}} key={key}>{errors[key]}</div>
        })}
          <TextField required id="outlined-basic" name="password" value={password} type="password" onChange={this.changeHandler} label="password" variant="outlined" /><br/><br/>
          
          <Button variant="contained" color="secondary" type="submit">
          Login
        </Button>
     </form>
         </div>
        )
    }
}

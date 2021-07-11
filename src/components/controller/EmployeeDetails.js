import React, { Component } from 'react'
import UserSevice from '../axios/UserService'
import axios from 'axios'

export default class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employee:[]
        }
    }
    componentDidMount() {
        UserSevice.getEmployeeDetails().then((response)=>{
            this.setState({employee:response.data})
        })
    }
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        setTimeout(()=>{
            this.setState({show:false});
            this.props.history.push("/addAsset");
        },1000)
    }
    
    render() {
        return (
            <div>
                <h1 className = "text-center"> Employee Details</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Employee Id</td>
                            <td> Role</td>
                            <td> Employee First Name</td>
                            <td> Employee Last Name</td>
                            <td> Employee Email</td>
                            <td> Password</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.employee.map(
                                EmployeeDetails => 
                                <tr key = {EmployeeDetails.id}>
                                     <td> {EmployeeDetails.id}</td>  
                                     <td> {EmployeeDetails.role}</td>  
                                     <td> {EmployeeDetails.firstName}</td>   
                                     <td> {EmployeeDetails.lastName}</td>   
                                     <td> {EmployeeDetails.email}</td> 
                                     <td> {EmployeeDetails.password}</td>   
                                </tr>
                                
                            )
                            
                        }
                        <div>
                        <button className = "text-center" onClick={this.submitHandler}>AddAssets</button>
                        </div>  
                    </tbody>
                </table>

            </div>
        )
    }
}

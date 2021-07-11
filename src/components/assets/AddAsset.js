import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import axios from 'axios'

export default class AddAsset extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             assetName:'',
             category:''
        }
    }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        setTimeout(()=>{
            this.setState({show:false});
            this.props.history.push("/assetcomponent");
        },1000)
		axios.post('http://localhost:8090/createAsset', this.state)
			.then(response => {
				console.log(response)
                
			})
			.catch(error => {
				console.log(error)
			})
	}
    
    render() {
        const {assetName,category} = this.state
        return (
            <div>
                <h3>Add Assets</h3>
                <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
                <TextField required id="outlined-basic" label ="assetName" name="assetName" 
                     value={assetName} onChange={this.changeHandler} ></TextField><br></br><br></br>

                    <TextField required id="outlined-basic" label ="category" name="category" 
                     value={category} onChange={this.changeHandler} ></TextField><br></br><br></br>
                    <Button variant="contained" color="primary" onClick={this.submitHandler} > Add</Button>
                </form>
            </div>
        )
    }
}

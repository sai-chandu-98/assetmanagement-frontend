import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button'
import AssetService from '../axios/AssetService';
import UserService from '../axios/UserService';

class AssetComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            asset:[]
        }
        this.addAssets=this.addAssets.bind(this);
        this.deleteAssets=this.deleteAssets.bind(this);
    }

    deleteAssets(id){
      AssetService.deleteAssets(id).then(res=>{
         this.setState({asset:this.state.asset.filter(assets=>assets.id!==id)});
      });
    }

    componentDidMount(){
        AssetService.getAsset().then((response) => {
            this.setState({ asset: response.data})
        });
    }
    addAssets(){
        this.props.history.push('/addAsset');
    }

    render (){
        return (
           
            <div className="color">
                <h1 className = "text-center"> Asset List</h1>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addAssets}>Add Assets</button>
                </div>
                <div className="row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>

                             <td> Assets Id</td>
                             <td> Assets Name</td>
                             <td> Assets Category</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.asset.map(
                                getAsset => 
                                <tr key = {getAsset.assetid}>
                                      <td>{getAsset.assetid}</td> 
                                      <td>{getAsset.assetname}</td> 
                                      <td>{getAsset.category}</td>  
                                      <td>
                                          <Button onClick={()=>this.deleteAssets(getAsset.id)}className="btn btn-danger">Delete</Button>
                                      </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            </div>
           

        )
    }
}

export default AssetComponent

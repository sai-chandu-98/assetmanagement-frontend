import './App.css';
import SignUp from './components/controller/SignUp';
import Login from './components/controller/Login';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import EmployeeDetails from './components/controller/EmployeeDetails';
import AddAsset from './components/assets/AddAsset';
import AssetComponent from './components/assets/AssetComponent ';


function App() {
  return (
    <Router> 
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <Link class="navbar-brand" to="#">Asset Management</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/signUp">SignUp</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/login">Login</Link>
      </li>
      </ul>
      </div>
</nav> 
      <div>
     <Route path="/signUp" component={SignUp} /> 
     <Route path="/login" component={Login} />
     <Route path="/employeeDetails" component={EmployeeDetails} />
     <Route path="/addAsset" component={AddAsset} />
     <Route path="/assetcomponent" component={AssetComponent} />
    </div>
    </div>
    </Router>
  );
}

export default App;

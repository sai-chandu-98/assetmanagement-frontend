import axios from "axios";

const USER_REST_API_URL ='http://localhost:8090/employee'
const CREATE_REST_API_URL = 'http://localhost:8090/create'
const LOGIN_REST_API_URL = 'http://localhost:8090/login'
class UserService{
    getEmployeeDetails(){
        return axios.get(USER_REST_API_URL);
    }

    postUsers(){
        return axios.post(CREATE_REST_API_URL);
    }
    login(){
        return axios.post(LOGIN_REST_API_URL);
    }
}

export default new UserService();
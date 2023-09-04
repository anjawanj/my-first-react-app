import axios from 'axios'

const USERS_GET_API_URL = 'http://localhost:8080/demo/all';
const USERS_CREATE_API_URL = 'http://localhost:8080/demo/add';

class UserService {

    getUsers(){
        return axios.get(USERS_GET_API_URL);
    }

    addUser(name,email) {
        return axios.post(USERS_CREATE_API_URL, {
            name: name,
            email: email
        })
    }
}

export default new UserService();
import axios from 'axios';
const API_URL = "http://127.0.0.1:8000"

export default class apiService{

    constructor(){}

    getList(){
        const url = `${API_URL}/api/list`;
        return axios.get(url).then(response => response.data);
    }
    getOnce(key){
        const url = `${API_URL}/api/${key}`;
        return axios.get(url).then(response => response.data);
    }
}
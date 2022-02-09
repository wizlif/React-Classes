import axios from "axios";

export function requestGetUser() {
    return axios.request({
        method: 'GET',
        url: 'http://localhost:7023/user'
    })
}
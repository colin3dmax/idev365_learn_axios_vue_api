import axios from 'axios';
import qs from 'qs';

const Api = {
    getUserInfo(){
        return axios.get(`/api/userInfo`);
    },
    postLogin(userName,password){
        const data = {
            userName,
            password,
        };
        return axios.post(`/api/login`,data);
    },
    postLoginByForm(userName,password){
        const data = {
            userName,
            password,
        };
        //以表单形式提交请求
        return axios.post(`/api/login`,qs.stringify(data),{
            headers:{
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
    }
}

export default Api;
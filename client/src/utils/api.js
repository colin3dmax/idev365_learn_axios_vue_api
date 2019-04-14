import axios from 'axios';
import qs from 'qs';
import Ajax from './ajax'
const Api = {
    getInfoNoToken(){
        return Ajax.get(`/api/info-no-token`,{ skipToken: true })
    },
    getUserInfo(){
        return Ajax.get(`/api/userInfo`);
    },
    postLogin(userName,password){
        const data = {
            userName,
            password,
        };
        return Ajax.post(`/api/login`,data);
    },
    postLoginByForm(userName,password){
        const data = {
            userName,
            password,
        };
        //以表单形式提交请求
        return Ajax.postByForm(`/api/login`,data);
    }
}

export default Api;
import axios from 'axios';
import qs from 'qs';

function getToken(){
    try{
        //此处为了演示使用假token
        return "5D41402ABC4B2A76B9719D911017C592";
        //你可以把服务器保存的token拿出来用
        // return localStorage.getItem("token");
    }catch(ex){
        console.log("error getToken->",ex);
    }
}

function loadHeaders(cfg){
    let headers = Object.assign({
        //此处配置一些业务中需要放置到Head里的默认参数
    },cfg.headers);

    //自动装配token
    if(!cfg.skipToken && !cfg.token){
        //(cfg中没有设置token或者cfg中带token都不自动设置token)
        headers.token = getToken();
    }
    return headers;
}

const AjaxUtil = {

    get(url,cfg={}){
        let headers = loadHeaders(cfg);
        return axios({
            url: url,
            method: "get",
            headers: headers,
            params: cfg.params,
        });
    },
    post(url,cfg={}){
        let headers = loadHeaders(cfg);
        return axios({
            url: url,
            method: "post",
            headers: headers,
            data: cfg.data,
        });
    },
    postByForm(url,cfg={}){
        let headers = loadHeaders(cfg);
        headers["content-type"]='application/x-www-form-urlencoded';
        return axios({
            url: url,
            method: "post",
            headers: headers,
            data: qs.stringify(cfg.data),
        });
    }

}

export default AjaxUtil;

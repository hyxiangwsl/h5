import axios from 'axios';
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
export function postForm(url, params) {
    return axios({
            method: 'post',
            url: url,
            data: params,
            transformRequest: [function(data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

    ).then().catch(err => {
        console.log('请求错误输出', err);
    })
}
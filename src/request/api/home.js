import service from '../index.js'
// 获取首页轮播图
export function getBanner() {
    return service({
        withCredentials: true,
        method: 'GET',
        url: '/banner?type=2'
    })
}
// 获取发现好歌单
export function getMusicList() {
    return service({
        withCredentials: true,
        method: 'GET',
        url: '/personalized?limit=10'
    })
}
// /search?keywords=海阔天空 搜索
export function getSearchMusic(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `/search?keywords=${data}`
    })
}

//电话的登陆/login/cellphone?phone=xxx&password=yyy
export function getPhoneLogin(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情
export function getUserDetail(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `/user/detail?uid=${data}`
    })
}
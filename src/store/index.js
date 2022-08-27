import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js'
import { getPhoneLogin } from '@/request/api/home'
export default createStore({
    state: {
        playList: [{
            al: {
                id: 139247987,
                name: "和风赴你",
                pic: 109951166965237580,
                picUrl: "https://p1.music.126.net/ifguF_gPoV4kWwM7BTKpiw==/109951166965237591.jpg",
                pic_str: "109951166965237591"
            },
            name: "和风赴你",
            id: 1914067702,
            ar: [{
                name: "三石阿"
            }]
        }],
        playListIndex: 0, //默认播放下标
        isbtnShow: true, //暂停按钮
        detailShow: false, //详情页显示
        lyricList: {}, //歌词
        currentTime: 0, //当前时间
        duration: 0, //歌曲总时长
        isLogin: false, //是否登录
        isFooter: true, //底部组件显示
        token: '',
        user: {} //用户信息
    },
    getters: {},
    mutations: {
        updateIsbtnShow: function(state, value) {
            state.isbtnShow = value
        },
        updatePlayList: function(state, value) {
            state.playList = value
            console.log(state.playList);
        },
        updatePlayListIndex: function(state, value) {
            state.playListIndex = value
        },
        updateDetailShow: function(state) {
            state.detailShow = !state.detailShow
        },
        updateLyricList: function(state, value) {
            state.lyricList = value
        },
        updateCurrentTime: function(state, value) {
            // console.log(state.currentTime);
            state.currentTime = value
        },
        updateDuration: function(state, value) {
            state.duration = value
        },
        pushPlayList: function(state, value) {
            state.playList.push(value)
        },
        updateIsLogin: function(state, value) {
            state.isLogin = true
        },
        updateToken: function(state, value) {
            state.token = value
            localStorage.setItem('token', state.token)
        },
        updateUser: function(state, value) {
            state.user = value
        }
    },
    actions: {
        getLyric: async function(context, value) {
            let res = await getMusicLyric(value)
                // console.log(res)
            context.commit("updateLyricList", res.data.lrc)
        },
        getLogin: async function(context, value) {
            let res = await getPhoneLogin(value)
                // console.log(res);
            return res
        },

    },
    modules: {}
})
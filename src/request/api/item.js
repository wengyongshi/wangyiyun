import service from '../index.js'
// 获取歌单详情数据
export function getMusicItemList(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `playlist/detail?id=${data}`
    })
}
// 获取歌单所有歌曲
export function getAllMusicItemList(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
//获取歌词
export function getMusicLyric(data) {
    return service({
        withCredentials: true,
        method: 'GET',
        url: `/lyric?id=${data}`
    })
}
<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="130" class="mySwpie" :show-indicators="false">
        <van-swipe-item v-for="item in musicList" :key="item">
        <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
        <img :src="item.picUrl" alt="">
        <span class="playCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-playCircle"></use>
          </svg>
          {{changeCount(item.playCount)}}
        </span>
        <span class="name">{{item.name}}</span>
        </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from '@/request/api/home.js';
export default {
data(){
  return {
    musicList:[]
  }
},
methods: {
  async getGeDan(){
    let res= await getMusicList()
    console.log(res);
    this.musicList=res.data.result
  },
  changeCount(num){
    if(num>=100000000)
    {
      return (num/100000000).toFixed(1)+"亿"
    }else if(num>=10000){
      return (num/10000).toFixed(1)+"万"
    }
    

  }
},
mounted(){
  this.getGeDan()
}
}
</script>

<style lang="less" scoped>
.musicList{
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title{
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more{
        border: 1px solid #ccc;
        text-align: center;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
    }
  }
  .musicContent{
    width: 100%;
    height: 4rem;
    .mySwpie{
      position: relative;
      height: 100%;
      img{
        width: 100%;
        height:2.5rem;
        border-radius: .3rem;
      }
      .playCount{
        color: #ccc;
        position: absolute;
        top: .1rem;
        left: 30%;
        z-index: 2;
        .icon{
          vertical-align: middle;
        }
      }
    }
    .van-swipe-item{
      padding-left: .2rem;
    }
  }
}
</style>
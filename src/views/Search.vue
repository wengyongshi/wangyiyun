<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <input type="text" placeholder="陈奕迅" v-model="searchKey" @keydown.enter="enterKey">
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span v-for="item in keyWorldList" :key="item" class="spanKey" @click="searchHistory(item)">
    {{item}}</span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-changyonggoupiaorenshanchu"></use>
    </svg>
  </div>
      <div class="itemList">
      <div class="item" v-for="(item,i) in searchList" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{i+1}}</span>
          <div>
            <p>{{item.name}}</p>
            <span v-for="(item1,index) in item.artists" :key="index">{{item1.name}}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon" aria-hidden="true" v-if="item.mvid!=0">
            <use xlink:href="#icon-shipinbofang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoxi"></use>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>
import {getSearchMusic} from '@/request/api/home.js'
export default {
  data(){
    return {
      keyWorldList:[],
      searchKey:'',
      searchList:[]
    }
  },
  mounted(){
    this.keyWorldList=JSON.parse(localStorage.getItem('keyWorldList')) 
  },
  methods:{
    enterKey:async function(){
      if(this.searchKey!="")
      {
        this.keyWorldList.unshift(this.searchKey)
        //去重
        this.keyWorldList=[...new Set(this.keyWorldList)]
        //固定长度
        if(this.keyWorldList.length>5)
        {
          this.keyWorldList.splice(this.keyWorldList.length-1,1)
        }
        localStorage.setItem('keyWorldList',JSON.stringify(this.keyWorldList))
        let res=await getSearchMusic(this.searchKey)
        console.log(res);
        this.searchList=res.data.result.songs
        this.searchKey=''
      } 
    },
    delHistory:function(){
      localStorage.removeItem('keyWorldList')
      this.keyWorldList=[]
    },
    searchHistory: async function(item){
      let res=await getSearchMusic(item)
      console.log(res);
      this.searchList=res.data.result.songs
    },
    updateIndex:function(item){
      this.$store.commit('pushPlayList',item)
      item.al=item.album
      item.al.picUrl=item.album.artist.img1v1Url
      this.$store.commit('updatePlayListIndex',this.$store.state.playList.length-1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 1rem;
  padding: 0 .2rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .4rem;
    border: none;
    border-bottom: .02rem solid #999;
    width: 90%;
    padding: .1rem;
  }
}
.searchHistory{
  width: 100%;
  padding: .2rem;
  position: relative;
  .searchSpan{
    font-weight: 700;
  }
  .spanKey{
    padding: .1rem .2rem;
    background-color: rgb(227, 220, 220);
    border-radius: .4rem;
    margin: .1rem .2rem;
    display: inline-block;
  }
  .icon{
    width: .4rem;
    height: .4rem;
    position: absolute;
    right: .2rem;
  }
}
  .itemList{
    padding: .2rem;
    height: 100%;
    width: 100%;
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
          padding: .3rem 10px;
          p{
          font-weight: bold;
          }
          span{
            color: gray;
          }
        }
      }
      .itemRight{
        display: flex;
        height: 100%;
        width: 1.2rem;
        justify-content: space-between;
        align-items: center;
        .icon{
          fill: gray;
        }
      }
    }
  }
</style>
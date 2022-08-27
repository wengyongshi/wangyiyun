<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgImg">
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou_huaban"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:hitemMusicTopref="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="contentRight">
      <img :src="playlist.coverImgUrl" alt="" class="contentImg">
      <div class="detailRight">
        <div class="contentSpanTitle">
          <span>{{playlist.name}}</span>
        </div>
        <div class="middle">
          <img :src="playlist.creator.avatarUrl" alt="" class="avatar">
          <span class="contentSpanName">{{playlist.creator.nickname}}</span>
          <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
        <div class="contentFooter">
          <span>{{playlist.description}}</span>
          <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-xiangyoujiantou"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="itemMusicFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31fenxiang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
      </svg>
    </div>
  </div>

</template>

<script>
export default {
  setup(props){
    // console.log(props);
    if((props.playlist.creator="")){
      props.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator
    }
  },
  props:['playlist']
}
</script>

<style lang="less" scoped>
.itemMusicTop{
  position: relative;
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  .itemLeft,.itemRight{
    width: 25%;
    height: 100%;
    margin: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: .4rem;
      color: #fff;
    }      
    .icon{
      fill: #fff;
    }
  }
  .bgImg{
    width: 100%;
    height: 8rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
  .contentRight{
    height: 2.4rem;
    width: 100%;
    position: absolute;
    top: 1.3rem;
    display: flex;
    justify-content: space-between;
    .contentImg{
      margin-left: .3rem;
      border-radius: .3rem;
      height: 100%;
    }

    .detailRight{
      height: 100%;    
      .contentSpanTitle{
      padding: 0 .2rem;
      color: #fff;
      font-weight: 900;
      }
      .middle{
        padding-left: .2rem;
        margin-top: .2rem;
        color: #efefef;
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: 60%;
        height: .6rem;
        img{
          height: 100%;
          border-radius: 50%;
        }
        .icon{
          width: .32rem;
          fill: #fff;
        }
      }
      .contentFooter{

        display: flex;
        justify-content: space-around;
        align-items: center;
        height:.6rem;
        font-size: .24rem;
        padding: .2rem;
        width: 100%;
        margin-top: .2rem;
        overflow: hidden;
        span{
          height: .60rem;
          flex: 1;
          color: #efefef;
        }
        .icon{
          fill: #fff;
          width: .32rem;
        }
      }
    }
  }
  .itemMusicFooter{
    height: .8rem;
    justify-content: space-between;
    display: flex;
    width: 100%;
    position: absolute;
    top: 4rem;
    padding-left: .2rem ;
    padding-right: .2rem;
    .icon{
      fill: #fff;
    }
  }
}
</style>
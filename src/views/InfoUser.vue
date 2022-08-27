<template>
  <div class="infoUserTop">
    <img :src="user.data.profile.avatarUrl" alt="" class="profileImg">
    <div class="name">{{user.data.profile.nickname}}</div>
  </div>
  <!-- <div>{{user.data.profile.avatarUrl}}</div> -->

</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['user'])
  },
  mounted(){
    console.log(this.user);
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.infoUserTop{
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileImg{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name{
    font-weight: 700;
    font-size: .4rem;
  }
}

</style>
<template>
  <router-view/>
  <FooterMusic v-show="$store.state.isFooter"></FooterMusic>
</template>
<script>
import FooterMusic from './views/FooterMusic.vue';
export default{
  components:{
    FooterMusic
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>

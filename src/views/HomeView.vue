<template>
  <div class="home">
    <TabNav></TabNav>
    <SwpierTop></SwpierTop>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src

import TabNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'
export default {
  name: 'HomeView',
  components: {
    TabNav,
    SwpierTop,
    IconList,
    MusicList
  }
}
</script>

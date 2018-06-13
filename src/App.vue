<template>
  <div id="app">
    <SocialBar/>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SocialBar from '@/components/SocialBar';

export default {
  name: 'App',
  components: {
    SocialBar,
    NavBar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  > div {
    padding: 0px 20px;
  }
}
</style>

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

<style lang="scss" src="./styles/_base.scss" />

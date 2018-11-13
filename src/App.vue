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
import MobileNavMenu from '@/components/MobileNavMenu';

export default {
  name: 'App',
  components: {
    SocialBar,
    NavBar,
    MobileNavMenu,
  },
};
</script>

<style lang="scss" src="./styles/_base.scss" />

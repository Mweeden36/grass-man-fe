<template>
  <div id="app">
    <SocialBar/>
    <NavBar @openmobilemenu="openMobileMenu"/>
    <MobileNavMenu v-if="mobileNavOpen" />
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
  methods: {
    openMobileMenu() {
      this.mobileNavOpen = true;
    },
  },
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>

<style lang="scss" src="./styles/_base.scss" />

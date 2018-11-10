<template>
<div class="nav-bar__wrap no-pad">
  <nav class="nav-bar">
    <div class="logo-container">
      <span>The Grass Man Lawn Maintenance</span>
    </div>
    <router-link to="/home" class="nav-button">
      <span>Home</span>
      <ChevronRightIcon/>
    </router-link>
    <!-- <router-link to="/shop">
      <span>Shop</span>
      <ChevronRightIcon/>
    </router-link> -->
    <router-link to="/contact" class="nav-button">
      <span>Contact</span>
      <ChevronRightIcon/>
    </router-link>
    <router-link to="/services" class="nav-button">
      <span>Services</span>
      <ChevronRightIcon/>
    </router-link>
    <MenuIcon class="nav-button mobile-menu-button" @click="openMobileMenu" />
  </nav>
</div>
</template>

<script>
import { ChevronRightIcon, MenuIcon } from 'vue-feather-icons';

export default {
  name: 'NavBar',
  components: {
    ChevronRightIcon,
    MenuIcon,
  },
  methods: {
    openMobileMenu() {
      this.$emit('openmobilemenu');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import url('//fonts.googleapis.com/css?family=Muli:300,400,600,700&amp;lang=en');
  @import './src/styles/_variables.scss';
  @import './src/styles/_mixins.scss';
  .nav-bar {
    background-color: $green;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 20px;
    .logo-container {
      flex: 1 0 auto;
      font-size: 1.8em;
      font-family: Muli;
      font-weight: 700;
      color: white;
    }
    .nav-button {
      text-decoration: none;
      padding: 0px 10px;
      font-size: 1.3em;
      color: $light-blue;
      cursor: pointer;
      @include tablet {
        display: none;
      }
      &.mobile-menu-button {
        display: none;
        @include tablet {
          display: inline-block;
          flex: 0 0 24px;
        }
      }
      &:hover {
        //TODO: Fade-in
        // color: $green-brown;
        color: white;
      }
      &.router-link-active {
        span {
          text-decoration: underline;
          color: white;
        }
        svg {
          //TODO: Animate
          transform: rotate(90deg);
        }
      }
      svg {
        vertical-align: top;
      }
    }
  }
</style>

<template>
  <nav class="nav-bar">
    <div class="logo-container">
      <span>The Grass Man Lawn Maintenance</span>
    </div>
    <router-link to="/home">
      <span>Home</span>
      <ChevronRightIcon/>
    </router-link>
    <!-- <router-link to="/shop">
      <span>Shop</span>
      <ChevronRightIcon/>
    </router-link> -->
    <router-link to="/contact">
      <span>Contact</span>
      <ChevronRightIcon/>
    </router-link>
    <router-link to="/services">
      <span>Services</span>
      <ChevronRightIcon/>
    </router-link>
  </nav>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons';

export default {
  name: 'NavBar',
  components: {
    ChevronRightIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import url('//fonts.googleapis.com/css?family=Muli:300,400,600,700&amp;lang=en');
  @import './src/styles/_variables.scss';
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
    a {
      text-decoration: none;
      padding: 0px 10px;
      font-size: 1.3em;
      color: $light-blue;
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

<template>
<div class="nav-bar__wrap no-pad">
  <Menu class="nav-bar" mode="horizontal" theme="dark" :active-name="activeName">
    <menu-item class="nav-button mobile" name="mobile">
      <Icon type="ios-menu" @click="showMobileMenu" />
    </menu-item>
    <menu-item to="/home" class="nav-button" name="Home">
      <Icon type="ios-home" />
      Home
    </menu-item>
    <menu-item to="/contact" class="nav-button" name="Contact">
      Contact
    </menu-item>
    <menu-item to="/services" class="nav-button" name="Services">
      Services
    </menu-item>
  </Menu>
  <h1>Grass Man Lawn Maintenance</h1>
</div>
</template>

<script>
import { Icon, Menu, MenuItem } from 'iview';

export default {
  name: 'NavBar',
  components: {
    Icon,
    Menu,
    MenuItem,
  },
  computed: {
    activeName() {
      return this.$route.name;
    },
  },
  methods: {
    showMobileMenu() {
      this.$emit('openmobilemenu');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import url('//fonts.googleapis.com/css?family=Muli:300,400,600,700&amp;lang=en');
  @import './src/styles/_variables.scss';
  @import './src/styles/_mixins.scss';
  .nav-bar__wrap {
    background-color: $green;
    height: 90px;
    display: flex;
    align-items: center;
    color: #FFF;
    h1 {
      display: inline-block;
      flex: 1 0 auto;
      text-align: end;
      padding-right: 20px;
    }
    .nav-bar {
      background-color: $green;
      display: inline-block;
      height: 100%;
      .nav-button {
        height: 100%;
        display: flex;
        align-items: center;
        &.mobile {
          display: none;
          font-size: 2em;
          @include phone {
            display: flex;
          }
        }
        @include phone {
          display: none;
        }
      }
    }
  }
</style>

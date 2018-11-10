<template>
  <Drawer
    v-model="val"
    placement="left"
    :width="60">
    <Menu class="nav-bar" mode="vertical" theme="dark" :active-name="activeName">
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
  </Drawer>
</template>

<script>
import { Drawer, Menu, MenuItem } from 'iview';

export default {
  name: 'MobileNavMenu',
  components: {
    Drawer,
    Menu,
    MenuItem,
  },
  data() {
    return {
      val: true,
    };
  },
};
</script>

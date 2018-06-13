<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/services">Services</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar {
    background: red;
    height: 40px;
    nav {
      height: 100%;
      a {
        text-decoration: none;
      }
    }
  }
</style>

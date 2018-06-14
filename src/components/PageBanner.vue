<template>
  <div class="image-bar">
    <h1>{{pageName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    pageName: String,
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/variables.scss';

.image-bar {
  background-image: url('../assets/alt-image.jpg');
  background-position: 0px -204px;
  background-size: cover;
  padding: 55px 0 50px;
  position: relative;
  width: 100%;
  z-index: 2;
  text-align: center;
  &:before {
    background: #000;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0.6;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  h1 {
    color: white;
  }
}
</style>

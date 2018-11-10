<template>
  <div class="services bot-pad">
    <PageBanner pageName="Services"/>
    <h2>Services</h2>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner';

export default {
  name: 'Services',
  components: {
    PageBanner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './src/styles/_variables.scss';

.services {
}
</style>

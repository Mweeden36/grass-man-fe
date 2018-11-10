<template>
  <div class="services bot-pad">
    <PageBanner pageName="Services"/>
    <div class="tight-padding services-form-card__wrap">
      <Card
        class="services-breakdown-card">
        <h1 slot="title">Schedule A Free Estimate</h1>
        <div class="services-breakdown">
          <h3>
            How do I schedule an estimate?
          </h3>
          <p>
            If you'd like to schedule an estimate, please fill out the form below. We'll review
            and reply to your request either confirming the time or asking for a little
            more information.
            <br/>
            <br/>
            Thanks for deciding to use your neighborhood grass man.
          </p>
          <br/>
          <ServicesForm />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Button, Card } from 'iview';
import PageBanner from '@/components/PageBanner';
import ServicesForm from '@/components/ServicesForm';

export default {
  name: 'Services',
  components: {
    Button,
    Card,
    PageBanner,
    ServicesForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './src/styles/_variables.scss';

.services {
  color: $blue;
  .services-breakdown-card {
    margin-top: 10px;
    background-color: $light-blue;
  }
}
</style>

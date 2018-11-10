<template>
  <div class="contact bot-pad">
    <PageBanner pageName="Contact"/>
    <div class="tight-padding contact-blurb">
    </div>
    <ContactForm/>
    <div class="subheader-text tight-padding">
      <h3>Other ways to contact us:</h3>
      <p class="subhead">There are plenty! Pick the one that works best for you!</p>
    </div>
    <div class="contact-type-list tight-padding">
      <div class="contact-type">
        <Icon type="ios-call" :size="25" />
        <h3>Phone</h3>
        <a class="value" v-bind:href="telephoneLink" target="_top">{{prettyPhoneNumber}}</a>
      </div>
      <div class="contact-type">
        <Icon type="ios-mail-outline" :size="25" />
        <h3>Email</h3>
        <a class="value" v-bind:href="emailLink" target="_top">{{emailAddress}}</a>
      </div>
      <div class="contact-type">
        <UsersIcon/>
        <h3>Social</h3>
        <a v-bind:href="facebookUrl" class="facebook-logo" target="_blank">
          <br/>
          <Icon type="logo-facebook" :size="25" />
        </a>
        <!-- <a v-bind:href="test" class="black-text" target="_blank">
          <TwitterIcon/>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Icon } from 'iview';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';
import config from '../assets/config.json';

export default {
  name: 'Contact',
  components: {
    Card,
    ContactForm,
    Icon,
    PageBanner,
  },
  data() {
    return {
      ...config,
    };
  },
  computed: {
    telephoneLink() {
      return `tel:${config.rawPhoneNumber}`;
    },
    emailLink() {
      return `mailto:${config.emailAddress}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './src/styles/_variables.scss';
.contact {
  color: $blue;
  .subheader-text {
    padding: 20px 0px;
    h3 {
      margin: 5px 0px;
    }
    .subhead {
      padding-bottom: 15px;
    }
  }
  .contact-type-list {
    display: flex;
    .contact-type {
      margin: 0px 5px;
      display: inline-block;
      flex: 1 0 75px;
      height: 125px;
      h3 {
        display: inline-block;
      }
      .value {
        display: block;
      }
      .facebook-logo {
        color: $facebook-blue;
      }
    }
  }
}
</style>

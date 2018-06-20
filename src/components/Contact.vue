<template>
  <div class="contact bot-pad">
    <PageBanner pageName="Contact"/>
    <div class="subheader-text tight-padding">
      <h3>Give Your Property the Best Posssible Look</h3>
      <p class="smallcaps subhead">Property Maintenance in {{location}}</p>
      <p>{{contactBlurb}}</p>
    </div>
    <div class="contact-type-list tight-padding">
      <div class="contact-type">
        <PhoneIcon/>
        <h3>Phone</h3>
        <a class="value" v-bind:href="telephoneLink" target="_top">{{prettyPhoneNumber}}</a>
      </div>
      <div class="contact-type">
        <MailIcon/>
        <h3>Email</h3>
        <a class="value" v-bind:href="emailLink" target="_top">{{emailAddress}}</a>
      </div>
      <div class="contact-type">
        <UsersIcon/>
        <h3>Social</h3>
        <a v-bind:href="facebookUrl" class="black-text" target="_blank">
          <FacebookIcon/>
        </a>
        <!-- <a v-bind:href="test" class="black-text" target="_blank">
          <TwitterIcon/>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner';
import { UsersIcon, MailIcon, PhoneIcon, FacebookIcon, TwitterIcon } from 'vue-feather-icons';
import config from '../assets/config.json';

export default {
  name: 'Contact',
  components: {
    PageBanner,
    PhoneIcon,
    UsersIcon,
    MailIcon,
    FacebookIcon,
    TwitterIcon,
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
.contact {
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
      .value {
        display: block;
      }
      svg {
        vertical-align: -3px;
      }
      svg, h3 {
        display: inline-block;
      }
      a {
        > svg {
          display: block;
        }
      }
    }
  }
}
</style>

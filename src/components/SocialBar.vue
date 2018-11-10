<template>
  <div class="social-bar">
    <ul>
      <li class="facebook">
        <FacebookIcon v-on:click="window.open(facebookUrl, '_blank')"/>
      </li>
      <li class="twitter">
        <TwitterIcon v-on:click="window.open(twitterUrl, '_blank')"/>
      </li>
      <li class="mail">
        <MailIcon v-on:click="window.open('mailto:' + emailAddress, '_top')"/>
        <span class="email-text contact-detail">
          {{emailAddress}}
        </span>
      </li>
      <li class="phone">
        <PhoneIcon v-on:click="window.open('tel:' + rawPhoneNumber, '_top')"/>
        <span class="phone-text contact-detail">
          {{prettyPhoneNumber}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { FacebookIcon, TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'vue-feather-icons';
import config from '../assets/config.json';

export default {
  name: 'SocialBar',
  components: {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon,
  },
  data() {
    return {
      ...config,
      window,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/_mixins.scss';
  .social-bar {
    padding: 20px 20px !important;
    ul {
      padding: 0px;
      margin: 0px;
      display: flex;
      width: 100%;
      overflow: hidden;
    }
    li {
      list-style-type: none;
      display: inline-block;
      padding: 0px 5px;
      &:first-child {
        padding: 0px;
      }
      &.mail {
        flex: 1 0 auto;
        text-align: right;
      }
      > span {
        vertical-align: super;

        &.contact-detail {
          @include narrow-phone {
            display: none;
          }
        }
      }
      > svg {
        cursor: pointer;
      }
    }
  }
</style>

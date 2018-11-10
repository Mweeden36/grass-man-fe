<template>
  <div class="social-bar">
    <ul>
      <li
        class="facebook"
        @click="window.open(facebookUrl, '_blank')">
        <Icon
          type="logo-facebook"
          :size="25" />
      </li>
      <li
        class="twitter"
        @click="window.open(twitterUrl, '_blank')">
        <Icon
          type="logo-twitter"
          :size="25" />
      </li>
      <li class="spacer" />
      <li
        class="mail"
        @click="window.open('mailto:' + emailAddress, '_top')">
        <Icon
          type="ios-mail-outline"
          :size="25" />
        <span class="email-text contact-detail">
          {{emailAddress}}
        </span>
      </li>
      <li
        class="phone"
        @click="window.open('tel:' + rawPhoneNumber, '_top')">
        <Icon
          type="ios-call-outline"
          :size="25" />
        <span class="phone-text contact-detail">
          {{prettyPhoneNumber}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Icon } from 'iview';
import config from '../assets/config.json';

export default {
  name: 'SocialBar',
  components: {
    Icon,
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
    padding: 10px 20px !important;
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
      cursor: pointer;
      &:first-child {
        padding: 0px;
      }
      &.spacer {
        cursor: default;
        flex: 1 0 auto;
      }
      &.facebook {
        color: $facebook-blue;
      }
      &.twitter {
        color: $twitter-blue;
      }
      > span {
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

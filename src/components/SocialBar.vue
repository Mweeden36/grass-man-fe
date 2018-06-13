<template>
  <div class="social-bar">
    <ul>
      <li class="facebook">
        <FacebookIcon/>
      <li class="twitter">
        <TwitterIcon/>
      <li class="linkedin">
        <LinkedinIcon/>
      <li class="mail">
        <MailIcon/>
        <span>
          {{emailAddress}}
        </span>
      </li>
      <li class="phone">
        <PhoneIcon/>
        <span>
          {{phoneNumber}}
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
    };
  },
};
</script>

<style lang="scss" scoped>
  .social-bar {
    padding: 5px 20px !important;
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
      }
      > svg, > span {
        cursor: pointer;
      }
    }
  }
</style>

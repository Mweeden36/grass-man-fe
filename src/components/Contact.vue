<template>
  <div class="contact bot-pad">
    <PageBanner pageName="Contact"/>
    <h2>Get in Touch</h2>
    <div class="contact-type">
      <PhoneIcon/>
      <h3>Phone</h3>
      <p>{{phoneNumber}}</p>
    </div>
    <div class="contact-type">
      <MailIcon/>
      <h3>Email</h3>
      <p>{{emailAddress}}</p>
    </div>
    <div class="contact-type">
      <UsersIcon/>
      <h3>Social</h3>
      <p>Facebook: {{facebookLink}}</p>
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner';
import { UsersIcon, MailIcon, PhoneIcon } from 'vue-feather-icons';
import config from '../assets/config.json';

export default {
  name: 'Contact',
  components: {
    PageBanner,
    PhoneIcon,
    UsersIcon,
    MailIcon,
  },
  data() {
    return {
      ...config,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.contact {
}
</style>

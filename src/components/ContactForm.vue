<template>
  <div class="tight-padding">
    <form id="contact-form" @submit="checkForm">
      <p v-if="errors.length">
        <span>Please correct the following error(s):</span>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
      </p>
      <label for="name-input">Name *</label>
      <input v-model="name" id="name-input" placeholder="Galileo Humpkins">
      <label for="email-input">Email Address *</label>
      <input v-model="email" id="email-input" placeholder="someone@example.com">
      <label for="phone-input">Phone Number</label>
      <input v-model="phone" id="phone-input" placeholder="(123) 555-1234">
      <label for="message-input">Message: *</label>
      <textarea
        v-model="message" id="message-input"
        placeholder="A message to The Grass Man!">
      </textarea>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import config from '../assets/config.json';

const nameRegex = new RegExp(/^[^0-9]{2,}$/ui);
// eslint-disable-next-line
const emailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export default {
  name: 'ContactForm',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      phone: null,
      message: null,
      ...config,
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.name || !this.name.match(nameRegex)) {
        this.errors.push('Please enter a valid name.');
      }
      if (!this.email || !this.email.match(emailRegex)) {
        this.errors.push('Please enter a vaild email address.');
      }
      if (!this.message) {
        this.errors.push('A message is required.');
      }
      if (!this.errors.length) {
        return this.submitForm();
      }
      return {
        error: this.errors,
      };
    },
    submitForm() {
      console.log('TODO: Call API.');
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-form {
  width: 50%;
  margin: 0 auto;
  label, input, textarea {
    display: block;
    width: 100%;
  }
}
</style>

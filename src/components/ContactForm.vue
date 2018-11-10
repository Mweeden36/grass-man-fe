<template>
  <div class="tight-padding">
    <form id="contact-form" @submit="validateForm">
      <h1>Contact Us</h1>
      <p class="contact-blurb">{{contactBlurb}}</p>
      <p v-if="errors.length" class="error-container">
        <span>Please correct the following error(s):</span>
        <ul class="error-list">
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
      </p>
      <div class="form-field name">
        <label for="name-input" class="required">Name</label>
        <input v-model="name"
          id="name-input"
          v-bind:class="{ error: this.nameError }"
          @blur="validateName"
          placeholder="Galileo Humpkins">
        <p v-if="nameError" class="error-text">{{nameError}}</p>
      </div>
      <div class="form-field name">
        <label for="email-input" class="required">Email Address</label>
        <input v-model="email"
          id="email-input"
          v-bind:class="{ error: this.emailError }"
          @blur="validateEmail"
          placeholder="someone@example.com">
        <p v-if="emailError" class="error-text">{{emailError}}</p>
      </div>
      <div class="form-field phone">
        <label for="phone-input">Phone Number</label>
        <input v-model="phone" id="phone-input" placeholder="(123) 555-1234">
      </div>
      <div class="form-field message">
        <label for="message-input" class="required">Message</label>
        <textarea
          v-model="message" id="message-input"
          placeholder="A message to The Grass Man!"
          v-bind:class="{ error: this.messageError }"
          @blur="validateMessage">
        </textarea>
        <p v-if="messageError" class="error-text">{{messageError}}</p>
      </div>
      <div class="form-field submit-container">
        <button>Submit</button>
      </div>
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
      nameError: false,
      emailError: false,
      messageError: false,
      ...config,
    };
  },
  methods: {
    validateName() {
      if (!this.name || !this.name.match(nameRegex)) {
        this.nameError = 'Please enter a valid name.';
      } else {
        this.nameError = false;
      }
      return this.nameError;
    },
    validateEmail() {
      if (!this.email || !this.email.match(emailRegex)) {
        this.emailError = 'Please enter a vaild email address.';
      } else {
        this.emailError = false;
      }
      return this.emailError;
    },
    validateMessage() {
      if (!this.message) {
        this.messageError = 'A message is required.';
      } else {
        this.messageError = false;
      }
      return this.messageError;
    },
    validateForm(e) {
      e.preventDefault();
      this.errors = [];
      this.messageError = this.validateMessage();
      this.emailError = this.validateEmail();
      this.nameError = this.validateName();
      const errors = [this.nameError, this.emailError, this.messageError];
      if (!errors.filter(Boolean).length) {
        return this.submitForm();
      }
      return {
        error: errors,
      };
    },
    submitForm() {
      // console.log('TODO: Call API.');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/_variables.scss';
$font-size: 1.1em;

#contact-form {
  width: 75%;
  margin: 0 auto;
  background-color: $light-blue;
  color: $blue;
  margin-top: 25px;
  padding: 25px;
  .error-list {
    color: $yellow;
    list-style-type: none;
  }
  h1 {
    margin: 0px 0px 5px;
  }
  .contact-blurb {
    padding-bottom: 5px;
  }
  .form-field {
    .error-text {
      color: #cc0033;
      font-size: 1.0em;
    }
    label, input, textarea {
      display: block;
      width: 100%;
      &.error {
        background-color: #fce4e4;
        border: 1px solid #cc0033;
        outline: none;
      }
    }
    label {
      font-size: $font-size;
      line-height: 1.2em;
      &.required:after {
        content: "*";
        color: $yellow;
      }
      margin-top: 15px;
    }
    input {
      height: $font-size;
      font-size: $font-size;
    }
    textarea {
      height: 75px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      font-size: $font-size;
    }
  }
  .submit-container {
    text-align: right;
    padding-top: 20px;
    button {
      height: 35px;
      background: none;
      outline: none;
      color: $blue;
      border: 2px solid $blue;
      border-radius: 20px;
      opacity: 0.8;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

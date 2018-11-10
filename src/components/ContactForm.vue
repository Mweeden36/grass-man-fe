<template>
<div class="contact-form-card__wrap">
  <Form id="contact-form" :model="formValidate" :rules="rules" ref="formValidate" >
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name"
        :autofocus="true"
        placeholder="Galileo Humpkins" />
    </FormItem>
    <FormItem label="E-Mail" prop="email">
      <Input v-model="formValidate.email"
        placeholder="someone@example.com" />
    </FormItem>
    <FormItem label="City" prop="city">
      <Input v-model="formValidate.city"
        placeholder="Rock Tavern" />
    </FormItem>
    <FormItem label="Phone Number" prop="phone">
      <Input v-model="formValidate.phone" id="phone-input" placeholder="(123) 555-1234" />
    </FormItem>
    <FormItem label="Message" prop="message">
      <Input
        type="textarea"
        :autosize="true"
        :spellcheck="true"
        v-model="formValidate.message"
        placeholder="A message to The Grass Man!"/>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</button>
    </FormItem>
  </Form>
</div>
</template>

<script>
import { Button, Card, Form, FormItem, Input } from 'iview';
import config from '../assets/config.json';

export default {
  name: 'ContactForm',
  components: {
    Button,
    Card,
    Form,
    FormItem,
    Input,
  },
  data() {
    return {
      formValidate: {
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please enter your name.',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'Please enter your email address.',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please provide a valid email address.',
            trigger: 'blur',
          },
        ],
        city: [
          {
            required: true,
            message: 'Please enter your city.',
            trigger: 'blur',
          },
        ],
        phone: [
          { required: false },
        ],
        message: [
          { required: false },
        ],
      },
      ...config,
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // console.log('TODO: Call API.');
          this.$Message.success('Success!');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/styles/_variables.scss';
@import './src/styles/_mixins.scss';

.contact-form-card__wrap {
  margin: 0 auto;
  .contact-form-card {
    background-color: $light-blue;
    color: $blue;
    .contact-blurb {
      padding: 15px 0px;
    }
    .ivu-form-item {
      margin-bottom: 15px;
    }
  }
}
</style>

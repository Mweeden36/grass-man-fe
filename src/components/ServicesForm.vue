<template>
  <Form class="services-form" :model="formValidate" :rules="rules" ref="formValidate" >
    <FormItem label="Name">
      <Input v-model="formValidate.name"
          :autofocus="true"
          placeholder="Galileo Humpkins" />
    </FormItem>
    <FormItem label="Address">
      <Input v-model="formValidate.address"
          placeholder="123 Roundabout Rd." />
    </FormItem>
    <FormItem label="City">
      <Input v-model="formValidate.city"
          placeholder="Rock Tavern" />
    </FormItem>
    <FormItem label="State">
      <Select v-model="formValidate.state">
        <Option
          v-for="state in stateList"
          :value="state.abbreviation"
          :key="state.abbreviation">
          {{state.name}}
        </Option>
      </Select>
    </FormItem>
    <FormItem label="Phone Number" prop="phone">
      <Input v-model="formValidate.phone" id="phone-input" placeholder="(123) 555-1234" />
    </FormItem>
    <FormItem label="When can we stop by?">
      <DatePicker type="datetimerange"
        v-model="formValidate.availability"
        placeholder="Select availability" />
    </FormItem>
    <FormItem label="Which Services are you interested in?">
      <CheckboxGroup v-model="formValidate.services">
        <Checkbox label="Mowing" value="mowing" />
        <Checkbox label="Leaf Cleanup" value="leaves" />
        <Checkbox label="Junk Cleanup" value="junk" />
        <Checkbox label="Shrubs" value="shrubs" />
      </CheckboxGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</button>
    </FormItem>
  </Form>
</template>

<script>
import { Button, Checkbox, CheckboxGroup, DatePicker, Form, FormItem, Input, Option, Select } from 'iview';
import { stateList } from '../assets/config.json';

export default {
  name: 'ServicesForm',
  components: {
    Button,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Form,
    FormItem,
    Input,
    Option,
    Select,
  },
  data() {
    return {
      formValidate: {
        services: [],
        availability: '',
        name: '',
        address: '',
        city: '',
        state: 'NY',
        zip: '',
        phone: '',
      },
      rules: {
        services: [
          {
            required: true,
          },
        ],
        availability: [
          {
            required: false,
          },
        ],
        name: [
          {
            required: true,
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
        state: [
          {
            required: true,
            message: 'Please select your state.',
            trigger: 'blur',
          },
        ],
        phone: [
          { required: false },
        ],
      },
      stateList,
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

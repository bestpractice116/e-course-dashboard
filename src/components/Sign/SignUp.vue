<template>
  <div class="flex justify-evenly h-screen md:h-screen bg-gray-50">

    <div class="px-10 py-10 md:py-0 w-108 md:w-120 m-auto">
      <h1 class="text-5xl text-blue-900 font-bold">Sign Up</h1>
      <div class="flex items-center gap-8 mt-10 my-6">
        <span class="text-red-600 font-semibold">—————</span>
        <span class="text-red-600 font-semibold text-lg">Sign up with</span>
      </div>
      <div class="flex flex-col md:flex-row gap-3 md:gap-6">
        <router-link to="/" class="flex items-center border rounded-lg px-4 py-3 w-full md:w-1/2 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
          <IconDynamic icon="google" class="mr-3" />
          <span class="font-semibold">Google</span>
        </router-link>
        <router-link to="/" class="flex items-center border rounded-md px-4 py-3 w-full md:w-1/2 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50">
          <IconDynamic icon="facebook" class="mr-3" />
          <span class="font-semibold">Facebook</span>
        </router-link>
      </div>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-3 mt-8">

        <div class="flex flex-col md:flex-row md:justify-between gap-6">
          <div class="flex flex-col md:w-1/2">
            <label for="name" class="text-gray-800 text-sm">Name</label>
            <input type="text" name="name" id="name" v-model="name" @blur="$v.name.$touch()" :class="{'shadow-inputInvalid':$v.name.$model && $v.name.$error,'shadow-inputValid':$v.name.$dirty && !$v.name.$error}" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
          </div>
          <div class="flex flex-col md:w-1/2">
            <label for="username" class="text-gray-800 text-sm">Username</label>
            <input type="text" name="username" id="username" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
          </div>
        </div>

        <div class="flex flex-col">
          <label for="email" class="text-gray-800 text-sm">Email</label>
          <input type="email" id="email" v-model="user.email" @blur="$v.user.email.$touch()" :class="{'shadow-inputInvalid':$v.user.email.$model && $v.user.email.$error,'shadow-inputValid':$v.user.email.$dirty && !$v.user.email.$error}" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
        </div>

        <div class="flex flex-col">
          <label for="password" class="text-gray-800 text-sm">Password</label>
          <input type="password" placeholder="Between 6-15 characters" id="password" v-model="user.password" @blur="$v.user.password.$touch()" :class="{'shadow-inputInvalid':$v.user.password.$model && $v.user.password.$error,'shadow-inputValid':$v.user.password.$dirty && !$v.user.password.$error}" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
        </div>

        <div class="flex flex-col">
          <label for="repassword" class="text-gray-800 text-sm">Password Check</label>
          <input type="password" id="repassword" v-model="repassword" @blur="$v.repassword.$touch()" :class="{'shadow-inputInvalid':$v.repassword.$model && $v.repassword.$error,'shadow-inputValid':$v.repassword.$dirty && !$v.repassword.$error}" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
        </div>

        <Countries />

        <label class="my-6">
          <input type="checkbox" class="mr-2" id="terms" @change="$v.terms.$touch()" v-model="terms" />
          I've read and agree with Terms of Service and out Privacy Policy
          <span :class="{'invalidCheck': $v.terms.$invalid}" class="hidden"> (Please check)</span>
        </label>

        <button type="submit" :disabled="$v.$invalid" :class="{'is-invalid-button': $v.$invalid}" class="bg-blue-600 w-2/6 mx-auto rounded-lg text-white p-2 font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">SIGN UP</button>

        <p class="mt-8">Already have an account? <router-link to="/signin" class="text-red-600 font-semibold ml-2">Sign In</router-link>
        </p>

      </form>

    </div>

    <div class="w-1/2 h-screen hidden lg:flex">
      <IconDynamic icon="sign" class="my-auto" />
    </div>

  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
import Countries from "./Countries.vue";

import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  between
} from "vuelidate/lib/validators";
export default {
  name: "SignUpPage",
  components: {
    IconDynamic,
    Countries,
  },
  data() {
    return {
      name: null,
      user: {
        email: null,
        password: null,
      },
      repassword: null,
      terms: false,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(40),
    },
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
    },
    repassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15),
      sameAsPassword: sameAs(function () {
        return this.user.password;
      }),
    },
    terms: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("register", { ...this.user });
    },
  },
};
</script>

<style scoped>
.is-invalid-button {
  background-color: rgb(211, 209, 209);
  color: rgb(131, 131, 131);
  cursor: default;
}
.is-invalid-button:hover {
  background-color: rgb(211, 209, 209);
  color: rgb(131, 131, 131);
}
.invalidCheck {
  color: red;
  display: inline;
  font-weight: bold;
}
</style>
<template>
  <div class="flex justify-evenly h-screen md:h-screen bg-gray-50">

    <div class="px-10 py-10 md:py-0 w-108 md:w-120 m-auto">
      <h1 class="text-5xl text-blue-900 font-bold">Sign In</h1>
      <div class="flex items-center gap-8 mt-10 my-6">
        <span class="text-red-600 font-semibold">—————</span>
        <span class="text-red-600 font-semibold text-lg">Sign in with</span>
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
        <p v-if="isError" class="text-red-600">Email or Password incorrect!</p>
        <div class="flex flex-col">
          <label for="email" class="text-gray-800 text-sm">Email</label>
          <input type="email" id="email" v-model="user.email" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
        </div>

        <div class="flex flex-col">
          <label for="password" class="text-gray-800 text-sm">Password</label>
          <input type="password" id="password" v-model="user.password" class="border rounded-md pl-2 py-1.5 mt-1 focus:outline-none focus:shadow-inputNormal">
        </div>

        <button type="submit" class="bg-blue-600 w-2/6 mx-auto rounded-lg text-white p-2 mt-4 font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">SIGN IN</button>

        <p class="mt-8">Doesn't have an account? <router-link to="/signup" class="text-red-600 font-semibold ml-2">Sign Up</router-link>
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
import axios from "axios";
export default {
  name: "SignInPage",
  components: {
    IconDynamic,
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isError: false,
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("login", { ...this.user })
        .then((res) => {})
        .catch((e) => {
          this.isError = true;
        });
    },
  },
};
</script>

<style scoped>
</style>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold text-center mb-6 text-blue-900">Login</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="mt-1 block w-full border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="mt-1 block w-full border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-900 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-200"
          >
            Login
          </button>
          <p class="text-center">
            Don't have an account? <router-link to="/register" class="text-blue-500">Register</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log("Login attempted with:", this.email, this.password);
        // Here you can add your login logic
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: You can add custom styles here */
  </style>
  
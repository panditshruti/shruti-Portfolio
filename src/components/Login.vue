<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-800 p-8 flex items-center justify-center">
    <div class="bg-gray-300 p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-800">Login</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-blue-800">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-blue-800">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-800"
        >
          Login
        </button>
        <p class="text-center">
          Don't have an account? <router-link to="/register" class="text-blue-800">Register</router-link>
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
.bg-custom {
  background-image: url('@/assets/loginimagbg.jpg');
  opacity: 5;
  background-size: cover;
  background-position: center;
}
</style>

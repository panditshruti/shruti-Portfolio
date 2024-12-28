<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center">
    <div class="bg-gray-300 p-8 rounded-lg shadow-md w-96">
      <!-- Display Saved Data -->
      <div v-if="isLoggedIn" class="mb-6 bg-blue-100 p-4 rounded-lg text-blue-800">
        <h2 class="text-lg font-semibold">Logged In Details</h2>
        <p><strong>Email:</strong> {{ savedEmail }}</p>
        <p><strong>Password:</strong> {{ savedPassword }}</p>
      </div>

      <!-- Login Form -->
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
          class="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      savedEmail: "",
      savedPassword: "",
      isLoggedIn: false, // Flag to check if the user has logged in
    };
  },
  methods: {
    handleSubmit() {
      this.savedEmail = this.email; // Save entered email
      this.savedPassword = this.password; // Save entered password
      this.isLoggedIn = true; // Set login flag to true
      console.log("Login successful with:", this.email, this.password);
      this.email = ""; // Clear input fields
      this.password = "";
    },
  },
};
</script>

<style scoped>
.bg-custom {
  background-image: url("@/assets/loginimagbg.jpg");
  background-size: cover;
  background-position: center;
}
</style>

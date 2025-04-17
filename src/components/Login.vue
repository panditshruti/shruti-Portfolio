<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-blue-800">Enter Details</h2>

      <!-- Display Saved Data -->
      <div v-if="isSubmitted" class="mb-6 p-4 bg-blue-100 rounded-lg text-blue-800">
        <p><strong>Email:</strong> {{ savedEmail }}</p>
        <p><strong>Password:</strong> {{ savedPassword }}</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="saveData" class="space-y-4">
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
          Save and Display
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
      savedEmail: "", // For displaying the saved email
      savedPassword: "", // For displaying the saved password
      isSubmitted: false, // To track if the form is submitted
    };
  },
  methods: {
    saveData() {
      // Save data locally
      this.savedEmail = this.email;
      this.savedPassword = this.password;

      // Mark the form as submitted
      this.isSubmitted = true;

      // Clear input fields (optional)
      this.email = "";
      this.password = "";
    },
  },
};
</script>

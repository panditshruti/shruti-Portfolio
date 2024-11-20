<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 p-8 flex items-center justify-center">
      <div class="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <!-- Header -->
        <div class="text-center mb-6">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Contact & Address</h1>
          <p class="text-gray-500">Feel free to reach out anytime!</p>
        </div>
  
        <div class="divide-y divide-gray-300">
          <!-- Address Section -->
          <div class="py-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">📍 Address</h2>
            <p class="text-gray-600">
              123, Main Street,<br />
              Downtown, Cityville,<br />
              State - 56789, Country
            </p>
          </div>
  
          <!-- Contact Section -->
          <div class="py-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">📞 Contact Details</h2>
            <ul class="text-gray-600 space-y-2">
              <li>
                <strong>Phone:</strong> +1 234-567-8901
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:contact@example.com" class="text-blue-600 hover:underline">
                  contact@example.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>
                <a href="#" class="text-blue-600 hover:underline">www.example.com</a>
              </li>
            </ul>
          </div>
  
          <!-- Social Media Section -->
          <div class="py-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">🌐 Social Media</h2>
            <ul class="flex space-x-6 mt-2 text-gray-600">
              <li>
                <a
                  href="#"
                  class="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                >
                  <i class="fab fa-facebook"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                >
                  <i class="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center space-x-2 text-blue-800 hover:text-blue-900"
                >
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactDetails",
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  
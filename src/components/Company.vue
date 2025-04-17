<template>
    <div class="min-h-screen bg-gray-100 py-10">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-600">Posts Information</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-blue-600 shadow-lg gap-6">
          <div
            v-for="post in postDetails"
            :key="post.id"
            class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div class="p-6 ">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h2>
              <p class="text-gray-600 mb-4">{{ post.body.slice(0, 100) }}...</p>
              <div class="flex justify-between items-center shadow-lg">
                <span class="text-gray-500 text-sm">{{ post.tags.join(', ') }}</span>
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        postDetails: [],
      };
    },
  
    methods: {
      async fetchUser() {
        const response = await axios("https://dummyjson.com/posts");
        this.postDetails = response.data.posts;
      },
    },
    
    mounted() {
      this.fetchUser();
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  
<template>
    <div id="app">
      <h1>User Details</h1>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
        try {
          const response = await fetch('https://dummyjson.com/users/1');
          const data = await response.json();
          this.user = data;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  
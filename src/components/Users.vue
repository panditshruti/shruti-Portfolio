<template>
    <div class="min-h-screen bg-gray-100 py-10">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-600">User Information</h1>
  
        <!-- Display user details if available -->
        <div v-if="userDetails && userDetails.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="user in userDetails" :key="user.id" class="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
            <img :src="user.image || 'https://via.placeholder.com/100'" class="w-20 h-20 rounded-full object-cover border-2 border-blue-500" alt="User Avatar">
            <div>
              <h2 class="text-xl font-semibold text-gray-800">{{ user.firstName }} {{ user.lastName }}</h2>
              <p class="text-gray-600"><strong>Email:</strong> {{ user.email }}</p>
              <p class="text-gray-600"><strong>Phone:</strong> {{ user.phone }}</p>
              <p class="text-gray-600"><strong>Age:</strong> {{ user.age }} years</p>
              <p class="text-gray-600"><strong>Address:</strong> {{ user.address.address }}, {{ user.address.city }}</p>
              <p class="text-gray-600"><strong>Company:</strong> {{ user.company.name }}</p>
              <p class="text-gray-600"><strong>Role:</strong> {{ user.role }}</p>
            </div>
          </div>
        </div>
  
        <!-- Loading message -->
        <p v-else class="text-center text-gray-500 text-xl">Loading users...</p>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  
  export default {

    data(){
        return{
            userDetails:null
        }
    },

    methods:{
      async  fetchUser(){
         const response =await axios("https://dummyjson.com/users")
         this.userDetails = response.data.users
         console.log(response)
        }
    },
    mounted(){
        this.fetchUser()
    }

  }
  </script>
  
  
  
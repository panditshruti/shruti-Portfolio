<template>
  <div id="app" class="p-4">
    <h1 class="text-3xl font-bold mb-6">Recipes</h1>
    <div v-if="recipes.length">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="border rounded-lg shadow-lg p-4 mb-6 flex items-start space-x-4"
      >
        <!-- Recipe Image -->
        <img
          :src="recipe.image"
          :alt="recipe.name"
          class="w-24 h-24 object-cover rounded cursor-pointer"
          @click="viewImage(recipe.image)"
        />
        <!-- Recipe Details -->
        <div>
          <h2 class="text-xl font-semibold">{{ recipe.name }}</h2>
          <p class="text-gray-600">{{ recipe.cuisine }} | {{ recipe.difficulty }}</p>
          <p><strong>Prep Time:</strong> {{ recipe.prepTimeMinutes }} mins</p>
          <p><strong>Cook Time:</strong> {{ recipe.cookTimeMinutes }} mins</p>
          <p><strong>Rating:</strong> {{ recipe.rating }} ⭐ ({{ recipe.reviewCount }} reviews)</p>
          <p class="text-gray-700 mt-2">
            <strong>Tags:</strong> {{ recipe.tags.join(", ") }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading recipes...</p>
    </div>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="relative">
        <img :src="selectedImage" alt="Selected Recipe" class="max-w-full max-h-screen rounded" />
        <button
          @click="closeImage"
          class="absolute top-2 right-2 text-white text-2xl font-bold bg-blue-600 rounded-full px-2"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [], // Initialize as an empty array
      selectedImage: null, // To hold the image to be displayed in the modal
    };
  },
  mounted() {
    this.fetchRecipes();
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        this.recipes = data.recipes; // Use the `recipes` array from the API
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },
    viewImage(image) {
      this.selectedImage = image; // Set the selected image to be displayed
    },
    closeImage() {
      this.selectedImage = null; // Clear the selected image to close the modal
    },
  },
};
</script>

<style>
h1 {
  color: #333;
}
</style>

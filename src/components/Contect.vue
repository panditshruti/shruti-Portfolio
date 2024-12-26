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
          class="w-24 h-24 object-cover rounded"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [], // Initialize as an empty array
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
  },
};
</script>

<style>
h1 {
  color: #333;
}
</style>

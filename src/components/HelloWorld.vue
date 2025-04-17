<template>
  <div class="min-h-screen bg-cover bg-center bg-darkblue flex items-center justify-center">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-12 text-white">
      <!-- Text Section -->
      <div class="text-center lg:text-left flex-grow lg:w-2/3">
        <h1 class="text-4xl lg:text-6xl font-bold text-blue-300 mb-4">Hello, I'm</h1>
        <h2 class="text-3xl lg:text-5xl font-bold text-blue-400 mb-4">shruti Pandit</h2>
        <p class="text-lg lg:text-xl font-semibold mb-4">And I'm a <span class="text-blue-400">android and Web software Developer</span></p>
        <p class="text-md lg:text-lg mb-6">
          I'm an Android software developer and web developer and designer with extensive experience for over 
          3 years. My expertise is in creating Android apps and websites, 
          as well as frontend and backend development and design, and much more.
        </p>

        <!-- Social Media Links -->
        <div class="flex justify-center lg:justify-start gap-4 mb-6">
          <!-- Facebook -->
          <a href="https://www.facebook.com/yourprofile" target="_blank" class="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-500 transition">
            <i class="fab fa-facebook-f"></i>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/7739717389" target="_blank" class="bg-green-700 w-12 h-12 flex items-center justify-center rounded-full hover:bg-green-400 transition">
            <i class="fab fa-whatsapp"></i>
          </a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/skpandit413" target="_blank" class="bg-gradient-to-r from-pink-500 to-orange-600 w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <!-- More About Me Button -->
        <button class="bg-blue-600 text-white font-bold py-2 px-6 rounded-full animate-bounce shadow-xl shadow-blue-400 hover:bg-blue-700 transition">
          More About Me
        </button>
      </div>

      <!-- Image Section -->
      <div class="image-container lg:w-1/3 flex-shrink-0">
        <div class="glow-ring mx-auto rounded-full overflow-hidden" @dblclick="changeImage">
          <img
            :src="profileImage"
            alt="Profile"
            class="profile-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import images explicitly
import defaultImage from "@/assets/shruti.png";
import alternateImage from "@/assets/sk2.jpg";

export default {
  name: "PortfolioHeader",
  data() {
    return {
      profileImage: defaultImage, // Set the default image
    };
  },
  methods: {
    changeImage() {
      // Toggle the profile image between default and alternate
      this.profileImage =
        this.profileImage === defaultImage ? alternateImage : defaultImage;
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.glow-ring {
  padding: 10px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(255, 0, 255, 0.5), /* Magenta */
    rgba(239, 208, 53, 0.5), /* Cyan */
    rgb(55, 61, 245)  /* Yellow */
  );
  box-shadow: 0 0 15px rgba(0, 21, 255, 0.7), 0 0 30px rgba(79, 120, 243, 0.7),
    0 0 45px rgba(157, 248, 237, 0.7);
  border-radius: 50%;
  cursor: pointer; /* Add cursor to indicate interactivity */
}

.profile-image {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Keep the image centered vertically */
}

.bg-darkblue {
  background-color: #0f1c2e;

  background-size: cover; /* Make the image cover the whole background */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Ensure the image doesn't repeat */
}

.container {
  max-width: 1200px;
}
</style>

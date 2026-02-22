<template>
  <section class="gallery-container">
        <!-- Header Section -->
    <div class="header-section-gallery">
  <div class="tagline-wrapper">
    <div class="tagline">WE ARE HARMONI</div>
  </div>
  <div class="gallery_title">
    <div class="title_ga">
      <h1 class="main-title">Beautiful &  <span>Unforgettable Times</span></h1>
    </div>
    <div class="mission_part">
      <nav class="gallery-nav">
        <button class="nav-btn">
          <Icon icon="mdi:star-outline" class="icon" /> All Gallery
        </button>
        <button class="nav-btn">
          <Icon icon="mdi:play-circle-outline" class="icon" /> Video Gallery
        </button>
        <button class="nav-btn active">
          <Icon icon="mdi:image-multiple-outline" class="icon" /> Photo Gallery
        </button>
      </nav>
    </div>
  </div>
</div>

    <!-- Grid -->
    <div class="gallery-grid">
      <div class="gallery-item large">
        <img src="https://i.imgur.com/LkkZUzq.jpeg" alt="Wedding" />
        <div class="overlay">
          <p>John Doe Wedding day</p>
          <span>Wedding Paris, 24 June 2016</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1" alt="Fireworks" />
        <div class="overlay">
          <p>New Year Celebration</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Party" />
        <div class="overlay">
          <p>New Year Celebration</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="Wine" />
        <div class="overlay">
          <p>New Year Celebration</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Hiking" />
        <div class="overlay">
          <p>Envato Author Fun Hiking</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="Friends" />
        <div class="overlay">
          <p>New Year Celebration</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>
      <div class="gallery-item col_large">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Wine" />
        <div class="overlay">
          <p>New Year Celebration</p>
          <span>Food Festival, 24 June 2016</span>
        </div>
      </div>
      
    </div>

    <!-- Button -->
    <div class="gallery-footer">
      <button class="view-btn">View All Gallery</button>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style src="@/assets/css/gallery.css" scoped></style>

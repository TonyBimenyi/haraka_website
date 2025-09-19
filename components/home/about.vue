<!-- components/Home.vue -->
<template>
  <div class="home-container">
    <!-- Header Section -->
    <div class="header-section">
        <div class="left_part">
            <div class="tagline">WE ARE HARMONI</div>
            <h1 class="main-title">No.1 <span>Events Management</span> </h1>
            <button class="get-started-btn">GET STARTED</button>
        </div>
      
        <div class="mission_part">
        <p class="mission-vision">
        <span class="section-title">Our Mission</span>
        <span class="underline"></span>
        <br />
        Lorem ipsum dolor sit amet, the best consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
        </div>
        <div class="vision_part">
             <p class="mission-vision">
                <span class="section-title">Our Vision</span>
                <span class="underline"></span>
                <br />
                Lorem ipsum dolor sit amet, the best consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

        </div>


     
      
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="feature-item">
        <div class="icon-wrapper">
          <Icon icon="mdi:account-group" width="48" height="48" />
        </div>
        <h3>Friendly Team</h3>
        <p>More than 200 teams</p>
      </div>

      <div class="feature-item">
        <div class="icon-wrapper">
          <Icon icon="mdi:cogs" width="48" height="48" />
        </div>
        <h3>Unique Scenario</h3>
        <p>We thinking out of the box</p>
      </div>

      <div class="feature-item active">
        <div class="icon-wrapper">
          <Icon icon="mdi:map-marker" width="48" height="48" />
        </div>
        <h3>Perfect Venues</h3>
        <p>Perfect Venues</p>
      </div>

      <div class="feature-item">
        <div class="icon-wrapper">
          <Icon icon="mdi:headset" width="48" height="48" />
        </div>
        <h3>24/7 Hours Support</h3>
        <p>Anytime anywhere</p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
  </div>
</template>


<script setup>
import "@/assets/css/booking.css"
</script>

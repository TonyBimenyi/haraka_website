<!-- components/Home.vue -->
<template>
  <div class="home-container">
    <!-- Header Section -->
    <div class="header-section">
        <div class="left_part">
            <div class="tagline">HARAKA BURUNDI COMPANY</div>
            <h2 class="main-title">YOUR DREAM <span>OUR PRIORITY</span> </h2>
            <button class="get-started-btn">WORK WITH US</button>
        </div>
      
        <div class="mission_part">
        <p class="mission-vision">
        <span class="section-title">About Us</span>
        <span class="underline"></span>
        <br />
          Haraka is an event planning company in Burundi that turns every celebration into a beautiful and memorable experience. We organize weddings, corporate events, birthdays, graduations, and more taking care of decoration, logistics, and coordination so you can enjoy your moment stress-free.

            We deliver creativity, professionalism, and quality services that fit every style and every budget.
      </p>
        </div>
        <div class="vision_part">
             <p class="mission-vision">
                <span class="section-title">Why choose us</span>
                <span class="underline"></span>
                <br />
                We plan everything for you — no stress, just joy

                Customized events that match your vision

                Affordable packages for every budget

                Reliable & on time — Haraka means fast!

                Beautiful and modern designs for unforgettable memories
            </p>

        </div>


     
      
    </div>

    <!-- Features Section -->
    <div class="features-section">
  <div class="feature-item">
    <div class="icon-wrapper">
      <Icon icon="mdi:account-group" width="48" height="48" />
    </div>
    <h3>Professional Team</h3>
    <p>A skilled and dedicated team to bring your event to life.</p>
  </div>

  <div class="feature-item">
    <div class="icon-wrapper">
      <Icon icon="mdi:cogs" width="48" height="48" />
    </div>
    <h3>Creative Concepts</h3>
    <p>Ideas tailored to match your style and goals.</p>
  </div>

  <div class="feature-item active">
    <div class="icon-wrapper">
      <Icon icon="mdi:truck-delivery" width="48" height="48" />
    </div>
    <h3>Coordination</h3>
    <p>We handle planning details so everything flows smoothly.</p>
  </div>

  <div class="feature-item">
    <div class="icon-wrapper">
      <Icon icon="mdi:headset" width="48" height="48" />
    </div>
    <h3>Client Support</h3>
    <p>We stay with you throughout the journey, stress-free.</p>
  </div>
</div>



    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
  </div>
</template>


<script setup>
import "@/assets/css/about.css"
</script>

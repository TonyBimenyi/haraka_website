<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <span class="logo-text">
          HARAKA 
          <small>Burundi Company</small>
        </span>
      </div>

      <!-- Navigation Links with Icons -->
      <nav class="nav-links">
        <a href="#" class="active">
          <Icon icon="mdi:home" /> HOME
        </a>
        <a href="#">
          <Icon icon="mdi:information-outline" /> ABOUT US
        </a>
        <a href="#">
          <Icon icon="mdi:calendar" /> EVENTS
        </a>
        <a href="#">
          <Icon icon="mdi:image-multiple-outline" /> GALLERY
        </a>
        <a href="#">
          <Icon icon="mdi:phone" /> CONTACT US
        </a>
      </nav>

      <!-- Icons on right -->
      <div class="nav-icons">
        <div class="icon-circle">
          <Icon icon="mdi:account" />
        </div>
        <div class="icon-circle">
          <Icon icon="mdi:magnify" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import "@/assets/css/navbar.css"
</script>

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

      <!-- Desktop Navigation -->
      <nav class="nav-links desktop-nav">
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

      <!-- Right icons (desktop + mobile) -->
      <div class="nav-icons">
        <div class="icon-circle">
          <Icon icon="mdi:account" />
        </div>
        <div class="icon-circle">
          <Icon icon="mdi:magnify" />
        </div>

        <!-- Hamburger button - only on mobile -->
        <button class="hamburger" @click="isOpen = !isOpen">
          <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav class="nav-links mobile-nav" :class="{ open: isOpen }">
      <a href="#" class="active" @click="isOpen = false">
        <Icon icon="mdi:home" /> HOME
      </a>
      <a href="#" @click="isOpen = false">
        <Icon icon="mdi:information-outline" /> ABOUT US
      </a>
      <a href="#" @click="isOpen = false">
        <Icon icon="mdi:calendar" /> EVENTS
      </a>
      <a href="#" @click="isOpen = false">
        <Icon icon="mdi:image-multiple-outline" /> GALLERY
      </a>
      <a href="#" @click="isOpen = false">
        <Icon icon="mdi:phone" /> CONTACT US
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.navbar-container {
  width: 90%;
  max-width: 1400px;
  margin: 1.2rem auto 0;
  padding: 0.7rem 1.8rem;
  background-color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-text {
  font-size: 1.65rem;
  font-weight: 800;
  color: #222;
  letter-spacing: -0.5px;
}

.logo-text small {
  display: block;
  font-size: 0.78rem;
  font-weight: 400;
  color: #f7a500;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.1rem;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  transition: color 0.25s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: #f7a500;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.icon-circle {
  width: 38px;
  height: 38px;
  border: 2px solid #f7a500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
  font-size: 1.15rem;
  transition: all 0.25s ease;
  cursor: pointer;
}

.icon-circle:hover {
  background: #f7a500;
  color: white;
  transform: translateY(-1px);
}

/* ────────────────────────────────────────
   Hamburger (pure CSS improvements)
───────────────────────────────────────── */
.hamburger {
  display: none;           /* hidden by default */
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  font-size: 1.9rem;
  color: #222;
  cursor: pointer;
  padding: 0;
  margin-left: 0.4rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s, color 0.2s;
}

.hamburger:hover {
  background: rgba(247, 165, 0, 0.08);
  color: #f7a500;
}

/* Mobile Menu */
.mobile-nav {
  display: none;
}

/* ────────────────────────────────────────
   Responsive Rules
───────────────────────────────────────── */
@media (max-width: 1024px) {
  .navbar-container {
    width: 94%;
    padding: 0.65rem 1.5rem;
    margin-top: 1rem;
    border-radius: 20px;
  }
  .logo-text { font-size: 1.5rem; }
  .logo-text small { font-size: 0.74rem; }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.6rem 1.3rem;
    margin-top: 0.9rem;
    width: 80%;
    border-radius: 16px;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex !important;   /* force visibility */
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1.8rem 1.5rem;
    margin-top: 0.7rem;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.14);
    transform: translateY(-12px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .mobile-nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .mobile-nav a {
    font-size: 1.08rem;
    padding: 0.7rem 0;
  }

  .nav-icons {
    gap: 0.6rem;
  }

  .icon-circle {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0.55rem 1.1rem;
    margin-top: 0.7rem;
  }

  .logo-text {
    font-size: 1.35rem;
  }

  .hamburger {
    width: 40px;
    height: 40px;
    font-size: 1.75rem;
  }

  .mobile-nav {
    padding: 1.5rem 1.2rem;
  }
}
</style>
<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <!-- <img src="/logo.png" alt="Haraka Logo" /> -->
        <span class="logo-text">HARAKA <small>Burundi Company</small></span>
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <a href="#" class="active">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">EVENTS</a>
        <a href="#">GALLERY</a>
        <a href="#">SPEAKER</a>
        <a href="#">CONTACT US</a>
      </nav>

      <!-- Icons -->
      <div class="nav-icons">
        <div class="icon-circle">
          <i class="fas fa-user"></i>
        </div>
        <div class="icon-circle">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.navbar {
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  width: 35px;
  height: 35px;
}

.logo-text {
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
}

.logo-text small {
  display: block;
  font-size: 0.7rem;
  font-weight: normal;
  color: #f7a500; /* orange accent */
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  text-decoration: none;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #f7a500; /* highlight orange */
}

.nav-icons {
  display: flex;
  gap: 12px;
}

.icon-circle {
  width: 35px;
  height: 35px;
  border: 2px solid #f7a500;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;
}

.icon-circle:hover {
  background: #f7a500;
  color: white;
}
</style>

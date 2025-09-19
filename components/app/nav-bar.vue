<template>
  <header class="site-header">
    <div class="container">
      <!-- Logo / Title -->
      <h1 class="logo">Haraka Website</h1>

      <!-- Navigation -->
      <nav class="nav">
        <NuxtLink to="/" class="nav-link" exact>Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.site-header {
  background-color: #333;
  color: white;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f4c542; /* golden hover */
}

/* Active link styling */
.nav-link.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #f4c542;
}
</style>

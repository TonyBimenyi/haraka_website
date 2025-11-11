<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left Section -->
      <div class="footer-left">
        <h2 class="footer-logo">
          <i class="fas fa-microphone"></i> HARMONI <span>Event Management</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <ul class="footer-contact">
            <li>
                <Icon icon="mdi:map-marker" width="20" height="20" />
                100 Highland Ave, California, United States
            </li>
            <li>
                <Icon icon="mdi:email" width="20" height="20" />
                contact@planets.com
            </li>
            <li>
                <Icon icon="mdi:phone" width="20" height="20" />
                +100 800 1234 5555
            </li>
            </ul>

            <div class="footer-social">
            <h3>Social Networks</h3>
            <a href="#"><Icon icon="mdi:facebook" width="24" height="24" /></a>
            <a href="#"><Icon icon="mdi:twitter" width="24" height="24" /></a>
            <a href="#"><Icon icon="mdi:instagram" width="24" height="24" /></a>
            <a href="#"><Icon icon="mdi:linkedin" width="24" height="24" /></a>
            </div>

      </div>

      <!-- Center Section -->
      <div class="footer-center">
        <h3>Useful Links</h3>
        <ul>
          <li><NuxtLink to="/">About Harmoni</NuxtLink></li>
          <li><NuxtLink to="/">Disclaimer</NuxtLink></li>
          <li><NuxtLink to="/">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/">Events Schedule</NuxtLink></li>
          <li><NuxtLink to="/">Sponsors</NuxtLink></li>
          <li><NuxtLink to="/">Venues</NuxtLink></li>
          <li><NuxtLink to="/">Tickets</NuxtLink></li>
          <li><NuxtLink to="/">Pricing Plans</NuxtLink></li>
        </ul>
      </div>

      <!-- Right Section -->
<div class="footer-right">
  <h3>Harmoni Instagram</h3>
  <div class="footer-instagram">
    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=200&q=80" alt="Party 1" />
    <!-- <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80" alt="Party 2" /> -->
    <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=200&q=80" alt="Party 3" />
    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=200&q=80" alt="Party 1" />
    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=200&q=80" alt="Party 1" />
    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=200&q=80" alt="Party 1" />
    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=200&q=80" alt="Party 1" />
    
  </div>
</div>

    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>
        © 2017 <span class="brand">Harmoni.com</span> all rights reserved |
        Made with <i class="fas fa-heart"></i> by <a href="#">East40</a>
      </p>
      <ul>
        <li><NuxtLink to="/">Contact us</NuxtLink></li>
        <li><NuxtLink to="/">About us</NuxtLink></li>
        <li><NuxtLink to="/">Site map</NuxtLink></li>
        <li><NuxtLink to="/">Privacy policy</NuxtLink></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style src="@/assets/css/footer.css"></style>

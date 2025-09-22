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
          <li><i class="fas fa-map-marker-alt"></i> 100 highland ave, California, United States</li>
          <li><i class="fas fa-envelope"></i> contact@planets.com</li>
          <li><i class="fas fa-phone"></i> +100 800 1234 5555</li>
        </ul>
        <div class="footer-social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
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
          <img src="https://via.placeholder.com/100" alt="Instagram 1" />
          <img src="https://via.placeholder.com/100" alt="Instagram 2" />
          <img src="https://via.placeholder.com/100" alt="Instagram 3" />
          <img src="https://via.placeholder.com/100" alt="Instagram 4" />
          <img src="https://via.placeholder.com/100" alt="Instagram 5" />
          <img src="https://via.placeholder.com/100" alt="Instagram 6" />
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

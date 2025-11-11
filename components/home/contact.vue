<template>
  <section class="contact-section">
   <div class="header-section-contact">
  <div class="tagline-wrapper">
    <div class="tagline">WE ARE HARMONI</div>
  </div>
  <div class="gallery_title">
    <div class="title_ga">
      <h1 class="main-title">Keep in touch <span>with Haraka Burundi Company</span></h1>
    </div>
    </div>
    </div>

    <form class="contact-form">
      <div class="form-row">
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Email address" required />
      </div>
      <div class="form-row">
        <input type="text" placeholder="Country" />
        <input type="tel" placeholder="Phone number" />
      </div>
      <div class="form-row full">
        <textarea rows="6" placeholder="Message"></textarea>
      </div>
      <div class="form-footer">
        <button type="submit" class="btn">Send Email</button>
      </div>
    </form>

  </section>

  <section class="map-section">
  <div class="map-container">
    <iframe
  src="https://maps.google.com/maps?q=-3.467333,29.347833&z=17&output=embed"
  width="100%"
  height="450"
  style="border:0;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
    <div class="map-pin"></div>
    <div class="map-card">
      <h3>Harmoni Event Management</h3>
      <p>Apple Store, 1 Prince St, New York, NY 10012, United States</p>
      <p><strong>⭐ 4.5</strong> (105 reviews)</p>
      <button>View Larger Map</button>
    </div>
  </div>
</section>

</template>

<script setup>
import "@/assets/css/contact.css";
</script>

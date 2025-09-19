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
</template>

<script setup>
import "@/assets/css/contact.css";
</script>

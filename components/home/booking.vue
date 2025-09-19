<template>
  <section class="booking-bar">
    <div class="booking-container">
      <!-- Left title -->
      <div class="booking-title">
        <h2>BOOKING <span>NOW</span></h2>
        <p>Start from $300.00</p>
      </div>

      <!-- Form -->
      <form class="booking-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <select>
          <option>Ticket</option>
          <option>VIP</option>
          <option>Standard</option>
          <option>Student</option>
        </select>
        <button type="submit">BOOK NOW</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import "@/assets/css/booking.css"
</script>

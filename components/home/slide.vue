<template>
  <div class="slide_container">
    <div class="slide_details">
      <h1 class="slide_title">Welcome to Haraka</h1>
      <h1 class="slide_subtitle">Event Planner</h1>
      <p>Every event could be perfect</p>
      <div class="buttons">
        <div class="button1">
          <button>ABOUT US</button>
        </div>
        <div class="button2">
          <button>GET STARTED</button>
        </div>
      </div>
    </div>

    <!-- Navigation arrows -->
    <div class="direction_button">
      <div class="next_btn">
        <Icon icon="mdi:arrow-left" width="24" height="24" />
      </div>
      <div class="prev_btn">
        <Icon icon="mdi:arrow-right" width="25" height="25" />
      </div>
    </div>

    <!-- Slide indicators -->
    <div class="slide_indicators">
      <span class="indicator">01</span>
      <span class="indicator active">02</span>
      <span class="indicator">03</span>
    </div>
  </div>
</template>

<script setup>
import "@/assets/css/slide.css"
</script>

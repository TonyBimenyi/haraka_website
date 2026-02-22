<template>
  <div
    class="slide_container"
    :class="{ fade: animate }"
    :style="bgImage"
  >
    <!-- Dark overlay -->
    <div class="overlay"></div>

    <!-- Main content wrapper -->
    <div class="slide_content">
      <!-- Text + buttons - centered -->
      <div class="slide_details">
        <h1 class="slide_title">{{ slides[currentSlide].title }}</h1>
        <h2 class="slide_subtitle">{{ slides[currentSlide].subtitle }}</h2>
        <p>{{ slides[currentSlide].text }}</p>

        <div class="buttons">
          <button class="btn primary">ABOUT US</button>
          <button class="btn outline">WORK WITH US</button>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="direction_button">
      <div class="arrow-btn prev" @click="prevSlide">
        <Icon icon="mdi:arrow-left" width="28" height="28" />
      </div>
      <div class="arrow-btn next" @click="nextSlide">
        <Icon icon="mdi:arrow-right" width="28" height="28" />
      </div>
    </div>

    <!-- Indicators -->
    <div class="slide_indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      >
        0{{ index + 1 }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import img1 from '@/assets/slides_img/img1.jpg'
import img2 from '@/assets/slides_img/img2.jpg'
import img3 from '@/assets/slides_img/img3.jpg'

const currentSlide = ref(0)
const animate = ref(true)
let interval = null

const slides = ref([  // ← make slides a ref (optional but safer for future changes)
  {
    title: 'Welcome to Haraka',
    subtitle: 'Event Planner',
    text: 'Every event could be perfect',
    image: img1
  },
  {
    title: 'Your Event Shine',
    subtitle: 'Plan Smart',
    text: 'We help you create magical moments',
    image: img2
  },
  {
    title: 'Celebrate With Style',
    subtitle: 'Enjoy the Day',
    text: 'Stress-free from start to finish',
    image: img3
  }
])

// Safe computed with proper .value access + fallback
const bgImage = computed(() => {
  const slide = slides.value[currentSlide.value]
  const url = slide?.image ? slide.image : '' // prevent undefined crash
  return {
    backgroundImage: url ? `url(${url})` : 'none'
  }
})

const triggerAnimation = () => {
  animate.value = false
  setTimeout(() => { animate.value = true }, 80)
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  triggerAnimation()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  triggerAnimation()
}

const goToSlide = (index) => {
  currentSlide.value = index
  triggerAnimation()
}

const startAutoPlay = () => {
  interval = setInterval(nextSlide, 6000)
}

const stopAutoPlay = () => {
  if (interval) clearInterval(interval)
}

onMounted(startAutoPlay)
onBeforeUnmount(stopAutoPlay)
</script>

<style scoped>
.slide_container {
  position: relative;
  height: 100dvh;
  min-height: 700px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.68);
  z-index: 1;
}

/* Content layers */
.slide_content,
.direction_button,
.slide_indicators {
  position: relative;
  z-index: 2;
}

.slide_content {
  width: 100%;
  max-width: 1300px;
  padding: 0 5vw;
  text-align: center;
}

.slide_details {
  max-width: 780px;
  margin: 0 auto;
}

.slide_title {
  font-size: clamp(2.4rem, 6.5vw, 5.2rem);
  font-weight: 800;
  margin-bottom: 0.4rem;
  line-height: 1.05;
}

.slide_subtitle {
  font-size: clamp(1.8rem, 5vw, 3.8rem);
  font-weight: 600;
  margin-bottom: 1.4rem;
  color: #f7a500;
}

.slide_details p {
  font-size: clamp(1.05rem, 2.8vw, 1.35rem);
  margin-bottom: 2.2rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.95;
}

/* Buttons */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.95rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn.primary {
  background: linear-gradient(135deg, #f7a500, #ff8c00);
  color: white;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(247, 165, 0, 0.35);
}

.btn.outline {
  background: transparent;
  color: white;
  border: 2.5px solid #f7a500;
  position: relative;
  overflow: hidden;
}

.btn.outline::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f7a500, #ff8c00);
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  z-index: -1;
}

.btn.outline:hover::before {
  transform: translateX(0);
}

.btn.outline:hover {
  color: white;
}

/* ── Arrows ── */
.direction_button {
  position: absolute;
  inset: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.arrow-btn {
  pointer-events: auto;
  background: rgba(30, 30, 30, 0.45);
  backdrop-filter: blur(6px);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(247, 165, 0, 0.25);
}

.arrow-btn:hover {
  background: #f7a500;
  transform: scale(1.15);
}

.arrow-btn .iconify {
  color: white;
  font-size: 1.6rem;
}

/* ── Indicators ── */
.slide_indicators {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.8rem;
  align-items: center;
  z-index: 3;
}

.indicator {
  font-size: 1.15rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.indicator.active {
  color: white;
  font-size: 1.6rem;
}

.indicator.active::after {
  content: '';
  position: absolute;
  bottom: -10px;           /* increased space so bar doesn't touch number */
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 4px;
  background: #f7a500;
  border-radius: 4px;
}

/* Animations */
.slide_container.fade {
  animation: fadeZoom 1.2s ease-out;
}

@keyframes fadeZoom {
  0% { opacity: 0.5; transform: scale(1.04); }
  100% { opacity: 1; transform: scale(1); }
}

.slide_details * {
  opacity: 0;
  animation: textFadeUp 1s ease forwards;
  animation-delay: 0.4s;
}

.slide_details h1 { animation-delay: 0.5s; }
.slide_details h2 { animation-delay: 0.65s; }
.slide_details p  { animation-delay: 0.8s; }
.buttons          { animation-delay: 1s; }

@keyframes textFadeUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ── Responsive Adjustments ── */
@media (max-width: 768px) {
  .slide_container {
    height: 85dvh;
    min-height: 620px;
  }

  .slide_title   { font-size: clamp(2.2rem, 8vw, 4rem); }
  .slide_subtitle { font-size: clamp(1.6rem, 6vw, 3rem); }

  .buttons {
    flex-direction: column;
    gap: 1rem;
    margin-top: 80px;
  }

  .btn {
    padding: 0.9rem 2.4rem;
    width: 80%;
    max-width: 320px;
    margin: 0 auto;
  }

  /* Arrows closer to edges + smaller */
  .direction_button {
    padding: 0 2vw;           /* much smaller margin → closer to edges */
  }

  .arrow-btn {
    width: 44px;
    height: 44px;
    background: rgba(30, 30, 30, 0.38); /* more transparent */
  }

  .arrow-btn .iconify {
    font-size: 1.4rem;
  }

  /* Indicators */
  .slide_indicators {
    bottom: 4vh;
    gap: 1.2rem;              /* tighter spacing */
  }

  .indicator {
    font-size: 1.05rem;
  }

  .indicator.active {
    font-size: 1.45rem;
  }

  .indicator.active::after {
    bottom: -9px;
    width: 32px;
    height: 3.5px;
  }
}

@media (max-width: 480px) {
  .slide_details {
    padding: 0 6vw;
  }

  .direction_button {
    padding: 0 1.5vw;         /* even closer on very small screens */
  }

  .arrow-btn {
    width: 40px;
    height: 40px;
  }

  .arrow-btn .iconify {
    font-size: 1.3rem;
  }

  .slide_indicators {
    bottom: 3.5vh;
    gap: 1rem;
  }

  .indicator {
    font-size: 0.95rem;
  }

  .indicator.active {
    font-size: 1.3rem;
  }

  .indicator.active::after {
    bottom: -8px;
    width: 28px;
    height: 3px;
  }
}
</style>
<template>
  <div class="slide_container" :class="{ fade: animate }" :style="bgImage">

    <!-- Content -->
    <div class="slide_details">
      <h1 class="slide_title">{{ slides[currentSlide].title }}</h1>
      <h1 class="slide_subtitle">{{ slides[currentSlide].subtitle }}</h1>
      <p>{{ slides[currentSlide].text }}</p>

      <div class="buttons">
        <div class="button1"><button>ABOUT US</button></div>
        <div class="button2"><button>WORK WITH US</button></div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="direction_button">
      <div class="next_btn" @click="prevSlide">
        <Icon icon="mdi:arrow-left" width="24" height="24" />
      </div>
      <div class="prev_btn" @click="nextSlide">
        <Icon icon="mdi:arrow-right" width="25" height="25" />
      </div>
    </div>

    <!-- Slide Indicators -->
    <div class="slide_indicators">
      <span v-for="(slide, index) in slides"
            :key="index"
            class="indicator"
            :class="{ active: index === currentSlide }"
            @click="goToSlide(index)">
        0{{ index + 1 }}
      </span>
    </div>

  </div>
</template>


<script>
import { Icon } from "@iconify/vue"
import "@/assets/css/slide.css"

// ✅ Import images from assets folder
import img1 from "@/assets/slides_img/img1.jpg"
import img2 from "@/assets/slides_img/img2.jpg"
import img3 from "@/assets/slides_img/img3.jpg"

export default {
  name: "HarakaSlide",
  components: { Icon },

  data() {
    return {
      currentSlide: 0,
      interval: null,
      animate: true,

      slides: [
        {
          title: "Welcome to Haraka",
          subtitle: "Event Planner",
          text: "Every event could be perfect",
          image: img1
        },
        {
          title: "Make Your Event Shine",
          subtitle: "Plan Smart",
          text: "We help you create magical moments",
          image: img2
        },
        {
          title: "Celebrate With Style",
          subtitle: "Enjoy the Day",
          text: "Stress-free from start to finish",
          image: img3
        },
      ]
    }
  },

  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.slides[this.currentSlide].image})`
      }
    }
  },

  mounted() {
    this.startAutoPlay()
  },

  beforeUnmount() {
    this.stopAutoPlay()
  },

  methods: {
    triggerAnimation() {
      this.animate = false
      setTimeout(() => (this.animate = true), 50)
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
      this.triggerAnimation()
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
      this.triggerAnimation()
    },
    goToSlide(index) {
      this.currentSlide = index
      this.triggerAnimation()
    },
    startAutoPlay() {
      this.interval = setInterval(this.nextSlide, 6000)
    },
    stopAutoPlay() {
      clearInterval(this.interval)
    }
  }
}

</script>


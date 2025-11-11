<template>
  <section class="booking-bar">
    <div class="booking-container">
      
      <!-- Left title -->
      <div class="booking-title">
        <h2>PLAN YOUR <span>EVENT</span></h2>
        <p>Stress-free celebrations starting from <strong>$300</strong></p>
      </div>

      <!-- Form -->
      <form class="booking-form" @submit.prevent="submitForm">
        <input type="text" v-model="form.name" placeholder="Your Full Name" required />
        <input type="email" v-model="form.email" placeholder="Email Address" required />

        <!-- Phone -->
        <input
          type="text"
          v-model="form.phone"
          placeholder="+257 68 00 00 00"
          @input="formatPhone"
          required
        />

        <select v-model="form.eventType" required>
          <option disabled value="">Event Type</option>
          <option>Wedding</option>
          <option>Birthday Party</option>
          <option>Corporate Event</option>
          <option>Baby Shower</option>
          <option>Graduation</option>
        </select>

        <input type="number" v-model="form.guests" placeholder="Guests (Ex: 100)" min="1" required />
        <input type="date" v-model="form.date" required />

        <button :disabled="loading.active" type="submit">{{ loading.active ? "Sending..." : "GET A QUOTE" }}</button>
      </form>

      <!-- Toast -->
      <div v-if="toast.show" :class="['toast', toast.type]">
        {{ toast.message }}
      </div>

    </div>
  </section>
</template>


<script setup>
import emailjs from "emailjs-com"
import { reactive } from "vue"
import "@/assets/css/booking.css"

const form = reactive({
  name: "",
  email: "",
  phone: "",
  eventType: "",
  guests: "",
  date: ""
})
const loading = reactive({ active: false })



const toast = reactive({
  show: false,
  message: "",
  type: "success"
})

function showToast(message, type = "success") {
  toast.message = message
  toast.type = type
  toast.show = true
  setTimeout(() => (toast.show = false), 3000)
}

function formatPhone() {
  if (!form.phone.startsWith("+")) {
    form.phone = "+" + form.phone.replace(/[^0-9]/g, "")
  }
}

function submitForm() {
   loading.active = true
  const params = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    event_type: form.eventType,
    guests: form.guests,
    event_date: form.date
  }

  emailjs
    .send("service_2h5x49d", "template_3f3nidh", params, "CcLC_tMxDzs5uCqwC")
    .then(() => {
      showToast(" Request sent successfully!", "success")
      form.name = form.email = form.phone = form.eventType = form.guests = form.date = ""
    })
    .catch(() => {
      showToast(" Failed! Try again later.", "error")
    })
    .finally(() => {
      loading.active = false
    })
}
</script>
<style scoped>
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #2ecc71;
  color: white;
  padding: 12px 18px;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  opacity: 0;
  animation: fadeInOut 3s ease forwards;
  z-index: 9999;
}

.toast.error {
  background: #e74c3c;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(10px); }
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>

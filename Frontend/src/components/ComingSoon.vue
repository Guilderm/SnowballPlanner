<!-- Frontend\src\components\ComingSoon.vue -->

<template>
  <div class="coming-soon-container">
    <!-- Toast Component for Notifications -->
    <Toast />

    <!-- Card Component for Content -->
    <Card class="coming-soon-card">
      <h1>Coming Soon!</h1>
      <p>We're working hard to bring you something amazing. Stay tuned!</p>

      <!-- Subscription Form -->
      <div class="subscription">
        <InputText v-model="email" placeholder="Enter your email" />
        <PrimeButton
          label="Subscribe"
          icon="pi pi-envelope"
          @click="subscribe"
        />
      </div>

      <!-- Notify Me Button -->
      <div class="notify-button">
        <PrimeButton
          label="Notify Me"
          icon="pi pi-bell"
          class="p-button-outlined"
          @click="notify"
        />
      </div>

      <!-- Countdown Timer -->
      <div class="countdown">
        <span>{{ days }}d</span> : <span>{{ hours }}h</span> :
        <span>{{ minutes }}m</span> :
        <span>{{ seconds }}s</span>
      </div>

      <!-- Social Media Links -->
      <div class="social-links">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-twitter"></i>
        </a>
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-facebook"></i>
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-instagram"></i>
        </a>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import Card from 'primevue/card';
import PrimeButton from 'primevue/button';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';

export default defineComponent({
  name: 'ComingSoon',
  components: {
    Card,
    PrimeButton,
    Toast,
    InputText,
  },
  setup() {
    // Reactive variable for email input
    const email = ref('');

    // Initialize Toast
    const toast = useToast();

    // Countdown Timer Variables
    const targetDate = new Date('2024-12-31T00:00:00'); // Set your target date here
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    let timer: number;

    // Function to update the countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        // Optional: Add logic when countdown ends
        return;
      }

      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    };

    // Initialize the countdown timer
    onMounted(() => {
      updateCountdown();
      timer = window.setInterval(updateCountdown, 1000);
    });

    // Clear the timer when component is unmounted
    onUnmounted(() => {
      clearInterval(timer);
    });

    // Function to handle "Notify Me" button click
    const notify = () => {
      toast.add({
        severity: 'info',
        summary: 'Notification',
        detail: 'You will be notified!',
        life: 3000,
      });
    };

    // Function to handle email subscription
    const subscribe = () => {
      if (validateEmail(email.value)) {
        // Handle the subscription logic (e.g., send to API)
        // For demonstration, we'll just show a toast
        toast.add({
          severity: 'success',
          summary: 'Subscribed',
          detail: 'Thank you for subscribing!',
          life: 3000,
        });
        email.value = ''; // Clear the input field
      } else {
        toast.add({
          severity: 'error',
          summary: 'Invalid Email',
          detail: 'Please enter a valid email address.',
          life: 3000,
        });
      }
    };

    // Basic email validation function
    const validateEmail = (email: string): boolean => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    };

    return {
      email,
      days,
      hours,
      minutes,
      seconds,
      notify,
      subscribe,
    };
  },
});
</script>

<style scoped>
.coming-soon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
}

.coming-soon-card {
  text-align: center;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subscription {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.subscription .p-inputtext {
  flex: 1;
}

.notify-button {
  margin-top: 1rem;
}

.countdown {
  font-size: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.countdown span {
  background-color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.social-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links a {
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #007bff;
}

/* Responsive Design */
@media (max-width: 600px) {
  .coming-soon-card {
    padding: 1rem;
  }

  .countdown {
    font-size: 1.5rem;
  }

  .social-links a {
    font-size: 1.2rem;
  }
}
</style>

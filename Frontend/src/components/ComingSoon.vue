<!-- src/components/ComingSoon.vue -->
<template>
  <div class="coming-soon">
    <!-- Hamburger Menu -->
    <PrimeButton icon="pi pi-bars" class="hamburger-menu" @click="toggleMenu" />
    <PrimeSidebar :visible="menuVisible" @hide="menuVisible = false">
      <h3>Menu</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </PrimeSidebar>

    <!-- Launch Message -->
    <PrimeCard class="launch-message">
      <h1>{{ productName }}</h1>
      <h2>{{ productMotto }}</h2>
      <p>{{ valueProposition }}</p>
    </PrimeCard>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <h3>Development Progress</h3>
      <PrimeProgressBar :value="10"></PrimeProgressBar>
    </div>

    <!-- Countdown Timer -->
    <div class="countdown-timer">
      <h3>Launching In:</h3>
      <h1>{{ countdown }}</h1>
    </div>

    <!-- Email Capture Form -->
    <div class="email-capture">
      <h3>Stay Updated!</h3>
      <PrimeInputText v-model="email" placeholder="Enter your email" />
      <PrimeButton label="Subscribe" @click="subscribe" />
    </div>

    <!-- Social Media Icons -->
    <div class="social-media">
      <h3>Follow Us</h3>
      <PrimeButton
        icon="pi pi-facebook"
        class="p-button-rounded p-button-text"
        @click="openLink('facebook')"
      />
      <PrimeButton
        icon="pi pi-twitter"
        class="p-button-rounded p-button-text"
        @click="openLink('twitter')"
      />
      <PrimeButton
        icon="pi pi-linkedin"
        class="p-button-rounded p-button-text"
        @click="openLink('linkedin')"
      />
      <PrimeButton
        icon="pi pi-whatsapp"
        class="p-button-rounded p-button-text"
        @click="openLink('whatsapp')"
      />
    </div>

    <!-- Sign Up for Beta CTA -->
    <div class="beta-cta">
      <PrimeButton
        label="Sign Up for Beta"
        class="p-button-success"
        @click="signUpForBeta"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import PrimeButton from 'primevue/button';
import PrimeSidebar from 'primevue/sidebar';
import PrimeCard from 'primevue/card';
import PrimeProgressBar from 'primevue/progressbar';
import PrimeInputText from 'primevue/inputtext';

export default defineComponent({
  name: 'ComingSoon',
  components: {
    PrimeButton,
    PrimeSidebar,
    PrimeCard,
    PrimeProgressBar,
    PrimeInputText,
  },
  setup() {
    const productName = 'DebtFreePlanner';
    const productMotto =
      'Strategically plan your journey to a Debt-Free Living';
    const valueProposition =
      'DebtFreePlanner provides loan recipients with a web-based tool to manage debt repayment plans, helping them achieve a Debt-Free Life faster.';

    // Hamburger Menu
    const menuVisible = ref(false);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    // Countdown Timer
    const targetDate = new Date('December 1, 2024 00:00:00').getTime();
    const countdown = ref('');
    let timerInterval: number;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        countdown.value = 'Launched!';
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    onMounted(() => {
      updateCountdown();
      timerInterval = window.setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerInterval);
    });

    // Email Capture Form
    const email = ref('');
    const subscribe = () => {
      if (email.value) {
        // Implement your email subscription logic here
        alert(`Thank you for subscribing, ${email.value}!`);
        email.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    };

    // Sign Up for Beta CTA
    const signUpForBeta = () => {
      // Implement your beta sign-up logic here
      alert('Thank you for signing up for the beta!');
    };

    // Social Media Links
    const openLink = (platform: string) => {
      const links: { [key: string]: string } = {
        facebook: 'https://www.facebook.com/yourpage',
        twitter: 'https://twitter.com/yourprofile',
        linkedin: 'https://www.linkedin.com/in/yourprofile',
        whatsapp: 'https://wa.me/yournumber',
      };
      window.open(links[platform], '_blank');
    };

    return {
      productName,
      productMotto,
      valueProposition,
      menuVisible,
      toggleMenu,
      countdown,
      email,
      subscribe,
      signUpForBeta,
      openLink,
    };
  },
});
</script>

<style scoped>
.coming-soon {
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.hamburger-menu {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.launch-message {
  margin-bottom: 2rem;
}

.progress-bar {
  margin: 2rem 0;
}

.countdown-timer {
  margin: 2rem 0;
}

.email-capture {
  margin: 2rem 0;
}

.email-capture input {
  width: 250px;
  margin-right: 1rem;
}

.social-media {
  margin: 2rem 0;
}

.beta-cta {
  margin: 2rem 0;
}

.social-media button {
  margin: 0 0.5rem;
}
</style>

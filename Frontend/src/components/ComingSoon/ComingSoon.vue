<template>
  <div class="coming-soon">
    <HamburgerMenu />

    <div class="content">
      <h1>We are <strong>Almost</strong> there!</h1>
      <p>Stay tuned for something amazing!!!</p>

      <ProgressBar :progress="75" />

      <CountdownTimer targetDate="2024-12-01T00:00:00" />

      <EmailForm />

      <SocialMediaLinks />

      <div class="contact-email">
        <p>
          Contact us at:
          <a href="mailto:info@DebtFreePlanner.app">info@DebtFreePlanner.app</a>
        </p>
      </div>

      <div class="cta">
        <button @click="signUpForBeta">Sign Up for Beta Program</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import CountdownTimer from './CountdownTimer.vue';
import EmailForm from './EmailForm.vue';
import SocialMediaLinks from './SocialMediaLinks.vue';
import HamburgerMenu from '../HamburgerMenu.vue';

export default {
  name: 'ComingSoon',
  components: {
    ProgressBar,
    CountdownTimer,
    EmailForm,
    HamburgerMenu,
    SocialMediaLinks,
  },
  methods: {
    signUpForBeta() {
      // Implement the signup logic or navigation here
      alert(
        'Thank you for your interest! We will notify you when the beta program is available.',
      );
    },
  },
};
</script>

<style scoped>
.coming-soon {
  position: relative;
  min-height: 100vh;
  background-image: url('https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.coming-soon::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 50, 0.7); /* Dark blue overlay */
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin-top: 20px;
}

.contact-email {
  margin-top: 20px;
}

.cta {
  margin-top: 20px;
}

.cta button {
  background-color: #007bff; /* Blue */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.cta button:hover {
  background-color: #0056b3;
}
</style>

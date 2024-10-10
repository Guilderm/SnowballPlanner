<template>
  <div class="email-form">
    <form @submit.prevent="submitForm">
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmailForm',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitForm() {
      // Implement the email submission logic here
      alert(`Thank you for subscribing with ${this.email}!`);
      this.email = '';
    },
  },
};
</script>

<style scoped>
.email-form {
  margin: 20px auto;
}

.email-form form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.email-form input {
  padding: 10px;
  font-size: 1em;
  width: 250px;
  max-width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.email-form button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #28a745; /* Green */
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.email-form button:hover {
  background-color: #218838;
}
</style>

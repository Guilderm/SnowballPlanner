<template>
  <div data-v-inspector="ui/pages/profile.vue:8:3">
    <h1 data-v-inspector="ui/pages/profile.vue:9:5">Welcome, {{ user.name }}</h1>
    <img :src="user.picture" alt="Profile Picture" data-v-inspector="ui/pages/profile.vue:10:5" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

// Define page metadata with middleware
definePageMeta({
  middleware: 'auth',
})

// Access the user object from Auth0
const { user } = useAuth0()
</script>

<!-- apps\public-site\app\pages\terms.vue -->

<template>
  <div class="min-h-screen bg-gray-100">
    <main class="mx-auto max-w-4xl px-4 py-8">
      <h1 class="mb-4 text-3xl font-bold">Terms of Service</h1>
      <p class="mb-6 text-gray-600">Last updated: {{ lastUpdated }}</p>

      <!-- Terms of Service Sections -->
      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">1. Introduction</h2>
        <p class="text-gray-700">
          Welcome to DebtFreePlanner. By accessing or using our service, you
          agree to be bound by these Terms of Service. If you do not agree with
          any part of the terms, you must not use our service.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">2. Use of Service</h2>
        <p class="text-gray-700">
          You agree to use our services only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the services.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">3. User Accounts</h2>
        <p class="text-gray-700">
          To access certain features of our service, you may be required to
          create an account. You are responsible for maintaining the
          confidentiality of your account information and for all activities
          that occur under your account.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">4. Intellectual Property</h2>
        <p class="text-gray-700">
          All content, features, and functionality on DebtFreePlanner are the
          exclusive property of DebtFreePlanner and are protected by
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">5. Termination</h2>
        <p class="text-gray-700">
          We may terminate or suspend your account and access to our service
          immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">6. Limitation of Liability</h2>
        <p class="text-gray-700">
          In no event shall DebtFreePlanner, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential, or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from your access to or use of our
          service.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">7. Governing Law</h2>
        <p class="text-gray-700">
          These Terms shall be governed and construed in accordance with the
          laws of [Your Country], without regard to its conflict of law
          provisions.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">8. Contact Us</h2>
        <p class="text-gray-700">
          If you have any questions about these Terms, please contact us at
          <a
            href="mailto:support@debtfreeplanner.app"
            class="text-blue-600 underline"
          >
            support@debtfreeplanner.app </a
          >.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// No need to import definePageMeta
definePageMeta({
  title: 'Terms of Service - DebtFreePlanner',
  meta: [
    {
      name: 'description',
      content:
        'Read the Terms of Service for DebtFreePlanner to understand the rules and regulations for using our service.',
    },
    {
      name: 'keywords',
      content:
        'Terms of Service, DebtFreePlanner, User Agreement, Rules, Regulations',
    },
  ],
})

const lastUpdated = 'October 21, 2024'
</script>

<!-- apps\public-site\app\pages\privacy.vue-->

<template>
  <div class="min-h-screen bg-gray-100">
    <main class="mx-auto max-w-4xl px-4 py-8">
      <h1 class="mb-4 text-3xl font-bold">Privacy Policy</h1>
      <p class="mb-6 text-gray-600">Last updated: {{ lastUpdated }}</p>

      <!-- Privacy Policy Sections -->
      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">1. Introduction</h2>
        <p class="text-gray-700">
          Welcome to DebtFreePlanner. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data when you visit our website.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">2. Information We Collect</h2>
        <p class="text-gray-700">
          We may collect personal information such as your name, email address,
          and contact details when you sign up for our services or contact us.
          Additionally, we collect non-personal information like browser type,
          operating system, and browsing behavior to improve our website and
          services.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">
          3. How We Use Your Information
        </h2>
        <p class="text-gray-700">
          Your information is used to provide and improve our services, respond
          to your inquiries, send you updates, and personalize your experience
          on our website. We do not sell or rent your personal information to
          third parties.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">4. Data Security</h2>
        <p class="text-gray-700">
          We implement various security measures to maintain the safety of your
          personal information. However, no method of transmission over the
          internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">5. Your Rights</h2>
        <p class="text-gray-700">
          You have the right to access, update, or delete your personal
          information. If you wish to exercise any of these rights, please
          contact us using the information provided below.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">6. Cookies</h2>
        <p class="text-gray-700">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and understand where our visitors are coming from. You can
          choose to disable cookies through your browser settings, but this may
          affect the functionality of our website.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">7. Third-Party Services</h2>
        <p class="text-gray-700">
          We may use third-party services for analytics, advertising, and other
          purposes. These third parties have their own privacy policies and are
          responsible for their data practices.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">8. Contact Us</h2>
        <p class="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us
          at
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
  title: "Privacy Policy - DebtFreePlanner",
  meta: [
    {
      name: "description",
      content:
        "Read the Privacy Policy of DebtFreePlanner to understand how we handle your personal information.",
    },
    {
      name: "keywords",
      content:
        "Privacy Policy, DebtFreePlanner, Personal Information, Data Protection",
    },
  ],
});

const lastUpdated = "October 21, 2024";
</script>

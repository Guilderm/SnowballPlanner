<template>
  <div class="social-media-links">
    <!-- WhatsApp Link -->
    <a
      href="https://wa.me/your-whatsapp-number"
      target="_blank"
      rel="noopener"
      title="WhatsApp"
    >
      <i class="pi pi-whatsapp"></i> WhatsApp
    </a>

    <!-- Facebook Link -->
    <a
      href="https://facebook.com/your-profile"
      target="_blank"
      rel="noopener"
      title="Facebook"
    >
      <i class="pi pi-facebook"></i> Facebook
    </a>

    <!-- Twitter Link -->
    <a
      href="https://twitter.com/your-profile"
      target="_blank"
      rel="noopener"
      title="Twitter"
    >
      <i class="pi pi-twitter"></i> Twitter
    </a>

    <!-- LinkedIn Link -->
    <a
      href="https://linkedin.com/your-profile"
      target="_blank"
      rel="noopener"
      title="LinkedIn"
    >
      <i class="pi pi-linkedin"></i> LinkedIn
    </a>

    <!-- YouTube Link -->
    <a
      href="https://youtube.com/your-channel"
      target="_blank"
      rel="noopener"
      title="YouTube"
    >
      <i class="pi pi-youtube"></i> YouTube
    </a>
  </div>
</template>

<style scoped>
.social-media-links {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.social-media-links a {
  color: white;
  font-size: 2em;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-media-links a:hover {
  color: #007bff;
}

.social-media-links i {
  margin-right: 8px;
}
</style>

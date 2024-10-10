<template>
  <div class="hamburger-menu">
    <button @click="toggleMenu">
      <span class="bar" v-for="n in 3" :key="n"></span>
    </button>
    <div class="menu" v-if="menuOpen">
      <!-- Menu items can be added here -->
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Beta Sign-Up</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.hamburger-menu {
  position: absolute;
  top: 20px;
  right: 20px;
}

.hamburger-menu button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 4px;
  background-color: white;
}

.menu {
  position: absolute;
  right: 0;
  background-color: rgba(0, 0, 50, 0.9);
  padding: 20px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
}

.menu a {
  color: white;
  text-decoration: none;
}
</style>

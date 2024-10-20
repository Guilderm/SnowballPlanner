<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\components\Navbar.vue -->
 
<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between items-center">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="/images/logo.svg" alt="DebtFreePlanner Logo" />
            <span class="hidden sm:block ml-2 text-xl font-semibold text-gray-800">DebtFreePlanner</span>
          </div>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <!-- Add navigation links here if needed -->
        </div>

        <div class="flex items-center">
          <template v-if="isAuthenticated">
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user?.picture || '/default-avatar.png'" alt="User Avatar" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="/settings" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button @click="logoutUser" :class="[active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700']">Sign out</button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </template>
          <template v-else>
            <button @click="login" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Log in
            </button>
          </template>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-4 pt-2">
        <!-- Add mobile navigation links here -->
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isAuthenticated = ref(false);
const user = ref(null);
const loginWithRedirect = ref<Function>(() => {});
const logout = ref<Function>(() => {});

onMounted(() => {
  const auth = useAuth0();

  if (auth) {
    isAuthenticated.value = auth.isAuthenticated.value;
    user.value = auth.user.value;
    loginWithRedirect.value = auth.loginWithRedirect;
    logout.value = auth.logout;
  }
});

const login = () => {
  loginWithRedirect.value();
};

const logoutUser = () => {
  logout.value({ logoutParams: { returnTo: window.location.origin } });
};
</script>

<template>
  <nav class="w-full bg-white sticky top-0 z-50 text-md">
    <!-- Navbar Container -->
    <div class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/">
          <img
            src="/images/logo.svg"
            alt="Three Tree Place Logo"
            class="h-12 md:h-14 logo-animation"
          />
        </router-link>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden space-x-8 font-extralight text-gray-500 md:flex items-center">
        <!-- Normal Links -->
        <router-link
          to="/"
          class="relative py-2 hover:text-black transition duration-300"
          active-class="text-black"
        >
          Home
          <span
            v-if="$route.path === '/'"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-black"
          ></span>
        </router-link>
        <router-link
          to="/about"
          class="relative py-2 hover:text-black transition duration-300"
          active-class="text-black"
        >
          About Us
          <span
            v-if="$route.path === '/about'"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-black"
          ></span>
        </router-link>

        <!-- Dropdown for "For Guests" -->
        <div 
          class="relative group"
          @mouseenter="toggleDropdown('for-guests')"
          @mouseleave="toggleDropdown(null)"
        >
          <a
            href="#for-guests"
            class="flex items-center py-2 hover:text-black transition duration-300 cursor-pointer"
            :class="{ 'text-black': isActive('/corporate-housing') || isActive('/trade-accommodation') || isActive('/temporary-accommodation') }"
          >
            For Guests
            <svg
              v-if="dropdownOpen === 'for-guests'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <span
            v-if="isActive('/corporate-housing') || isActive('/trade-accommodation') || isActive('/temporary-accommodation')"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-black"
          ></span>
          <!-- Submenu -->
          <transition name="fade">
            <div
              v-show="dropdownOpen === 'for-guests'"
              class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg"
            >
              <router-link
                to="/corporate-housing"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                active-class="bg-gray-100"
              >
                Corporate Housing
              </router-link>
              <router-link
                to="/trade-accommodation"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                active-class="bg-gray-100"
              >
                Trade Accommodation
              </router-link>
              <router-link
                to="/temporary-accommodation"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                active-class="bg-gray-100"
              >
                Temporary Accommodation
              </router-link>
            </div>
          </transition>
        </div>

        <!-- Dropdown for "For Landlords" -->
        <div 
          class="relative group"
          @mouseenter="toggleDropdown('for-landlords')"
          @mouseleave="toggleDropdown(null)"
        >
          <a
            href="#for-landlords"
            class="flex items-center py-2 hover:text-black transition duration-300 cursor-pointer"
            :class="{ 'text-black': isActive('/guaranteed-rent') || isActive('/partnerships-and-joint-ventures') }"
          >
            For Landlords
            <svg
              v-if="dropdownOpen === 'for-landlords'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <span
            v-if="isActive('/guaranteed-rent') || isActive('/partnerships-and-joint-ventures')"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-black"
          ></span>
          <!-- Submenu -->
          <transition name="fade">
            <div
              v-show="dropdownOpen === 'for-landlords'"
              class="absolute mt-2 w-48 bg-white shadow-lg rounded-lg"
            >
              <router-link
                to="/guaranteed-rent"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                active-class="bg-gray-100"
              >
                Guaranteed Rent
              </router-link>
              <router-link
                to="/partnerships-and-joint-ventures"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                active-class="bg-gray-100"
              >
                Partnerships and Joint Ventures
              </router-link>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="block md:hidden text-gray-500 focus:outline-none"
        @click="toggleMobileMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="absolute top-[70px] w-full bg-white shadow-lg flex flex-col font-extralight text-md py-4 md:hidden"
    >
      <router-link
        to="/"
        class="block py-2 px-6 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        class="block py-2 px-6 border-b border-gray-200 hover:bg-gray-100 transition duration-300"
      >
        About Us
      </router-link>

      <!-- Mobile Dropdown for "For Guests" -->
      <div>
        <button
          @click="toggleMobileDropdown('for-guests')"
          class="w-full flex justify-between items-center px-6 py-2 text-gray-500 hover:bg-gray-100 transition"
        >
          For Guests
          <svg
            v-if="mobileDropdownOpen === 'for-guests'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="mobileDropdownOpen === 'for-guests'" class="pl-6">
          <router-link
            to="/corporate-housing"
            class="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Corporate Housing
          </router-link>
          <router-link
            to="/trade-accommodation"
            class="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Trade Accommodation
          </router-link>
          <router-link
            to="/temporary-accommodation"
            class="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Temporary Accommodation
          </router-link>
        </div>
      </div>

      <!-- Mobile Dropdown for "For Landlords" -->
      <div>
        <button
          @click="toggleMobileDropdown('for-landlords')"
          class="w-full flex justify-between items-center px-6 py-2 text-gray-500 hover:bg-gray-100 transition"
        >
          For Landlords
          <svg
            v-if="mobileDropdownOpen === 'for-landlords'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="mobileDropdownOpen === 'for-landlords'" class="pl-6">
          <router-link
            to="/guaranteed-rent"
            class="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Guaranteed Rent
          </router-link>
          <router-link
            to="/partnerships-and-joint-ventures"
            class="block py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Partnerships and Joint Ventures
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const dropdownOpen = ref<string | null>(null);
    const mobileMenuOpen = ref(false);
    const activeMenu = ref('home');
    const mobileDropdownOpen = ref<string | null>(null);
    const menuData = ref({});
    const route = useRoute();

    const toggleDropdown = (dropdown: string | null) => {
      dropdownOpen.value = dropdown;
    };

    const toggleMobileMenu = () => {
      mobileDropdownOpen.value = null;
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const setActive = (menuName: string) => {
      activeMenu.value = menuName;
    };

    const toggleMobileDropdown = (dropdown: string) => {
      mobileDropdownOpen.value = mobileDropdownOpen.value === dropdown ? null : dropdown;
    };

    const isActive = (path: string) => {
      return route.path.startsWith(path);
    };

    return {
      dropdownOpen,
      mobileMenuOpen,
      activeMenu,
      mobileDropdownOpen,
      menuData,
      toggleDropdown,
      toggleMobileMenu,
      setActive,
      toggleMobileDropdown,
      isActive,
    };
  },
});
</script>

<style scoped>
/* Fade-in fade-out transition for dropdowns */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Additional CSS to refine the mobile dropdown submenu */
@media (max-width: 768px) {
  /* Indent submenu items slightly in mobile dropdown */
  .pl-6 > a {
    padding-left: 2rem;
  }
}

@keyframes logoFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-animation {
  animation: logoFadeIn 1s ease-in-out;
}

@keyframes menuSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-animation {
  animation: menuSlideIn 0.3s ease-in-out;
}
</style>
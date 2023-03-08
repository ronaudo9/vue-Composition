<script>
import { useCookies } from "vue3-cookies";
import axios from "axios";
export default {
  data() {
    return {
      id: "id",
    };
  },
  created: function () {
    let vm = this;
    const { cookies } = useCookies();
    vm.id = cookies.get("id");
    console.log(vm.id);
  },
  // updated: function(){
  //   location.reload()
  // },
  methods: {
    logout: function () {
      const { cookies } = useCookies();
      cookies.remove("id");
      // this.$router.go({ path: "/signin", force: true }
      axios
        .get("http://localhost:8002/items").then((response) => {
          //response.dataであるuは使用していない.then(this.$router.push({ path: "/signin" }));を使用したいがために.get("http://localhost:8001/items")を記載。
          let u = response.data;
          location.reload();
        }).then(this.$router.push({ path: "/signin" }));

      //this.$router.push({ path: "/signin" });
      // .then(() => {location.reload()})
    },
  },
};
</script>

<template>
  <!-- <signView @isLoggedIn="login"></signView> -->
  <div v-if="id">
    <header class="text-gray-600 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <RouterLink
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </RouterLink>
        <nav
          class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <RouterLink to="/" class="mr-5 hover:text-gray-900">Home</RouterLink>
          <RouterLink to="/cart" class="mr-5 hover:text-gray-900"
            >cart</RouterLink
          >
          <RouterLink to="/userEdit" class="mr-5 hover:text-gray-900"
            >user</RouterLink
          >
          <RouterLink to="/favorite" class="mr-5 hover:text-gray-900"
            >favorite</RouterLink
          >
          <RouterLink to="/user" class="mr-5 hover:text-gray-900"
            >history</RouterLink
          >

          <!-- <a class="mr-5 hover:text-gray-900">Fourth Link</a> -->
        </nav>
        <button
          @click.prevent="logout"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          ログアウト
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  </div>
  <div v-else>
    <header class="text-gray-600 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <RouterLink
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </RouterLink>
        <nav
          class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <RouterLink to="/" class="mr-5 hover:text-gray-900">Home</RouterLink>
          <RouterLink to="/signin" class="mr-5 hover:text-gray-900"
            >Sign in</RouterLink
          >
          <RouterLink to="/index" class="mr-5 hover:text-gray-900"
            >Sign Up</RouterLink
          >
          <!-- <a class="mr-5 hover:text-gray-900">Fourth Link</a> -->
        </nav>
        <!-- <button
        @click.prevent="logout"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        ログアウト
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> -->
      </div>
    </header>
  </div>
</template>

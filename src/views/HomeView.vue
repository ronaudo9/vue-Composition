<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import ItemDetail from "../views/ItemDetail.vue";
import {mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      products: "products",
    };
  },
  created(){
    this.product();
    },
  methods: {
    product: function () {
      this.$store.dispatch("getMessageAction");
      // console.log(this.$store.dispatch("getMessageAction"))
      // const vm = this;
      // axios.get("http://localhost:8001/items").then((response) => {
      //   vm.products = response.data;
      // });
    },
  },
};
</script>

<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in this.$store.state.message"
          :key="product.id"
          :href="'/' + product.id"
          class="group"
        >
          <ItemDetailView
            v-bind:to="{
              name: 'detail',
              params: { id: product.id },
            }"
          />

          <div
            class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

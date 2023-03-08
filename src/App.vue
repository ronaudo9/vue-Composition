<script setup>
import { RouterView } from "vue-router";
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import loginHeader from "./components/loginHeader.vue";
import { useCookies } from "vue3-cookies";
import GlobalHeader2 from "./components/GlobalHeader2.vue";
//  function data(){
//    return {id:"id"}
//  }

//     const a = function(){
//     const { cookies } = useCookies();
//     let id = cookies.get("id");
//   }
// const id = a();

</script>

<template>
  <GlobalHeader />
  <!-- <GlobalHeader2 /> -->
  <!-- <div>{{ id ? <GlobalHeader /> :  <loginHeader /> }}</div> -->

  <RouterView />
  <GlobalFooter/>
</template>

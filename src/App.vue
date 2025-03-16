<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";

import { ref, computed } from "vue";
import AppLayout from "./components/layout/AppLayout.vue";
import AuthLayout from "./components/layout/AuthLayout.vue";
const route = useRoute();

const auth = computed(() => {
  return route.meta.layout == "auth";
});

const mainLayout = computed(() => {
  return !auth.value ? AppLayout : AuthLayout;
});
</script>

<template>
  <component v-bind:is="mainLayout"></component>
</template>

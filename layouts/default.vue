<template>
  <div class="dark:bg-gray-800">
    <Header />
    <div class="h-screen pl-64 p-4 sm:ml-6">
      <div
        class="h-full rounded-lg "
      >
        <div
          class="h-full p-8 mb-4"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Header } from "#components";

const { $pb } = useNuxtApp();

onMounted(() => {
  if (!$pb.authStore.isValid) {
    navigateTo('/login');
  }
});
</script>

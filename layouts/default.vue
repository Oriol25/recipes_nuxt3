<template>
  <div class="dark:bg-gray-800">
    <Header />
    <div class="h-screen w-full pl-64 p-4 sm:ml-6">
      <div
        class="h-full rounded-lg "
      >
        <div
          class="h-full flex p-8 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800"
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

console.log($pb)

onMounted(() => {
  if (!$pb.authStore.isValid) {
    navigateTo('/login');
  }
});
</script>

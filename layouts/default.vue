<template>
  <div>
    <Header />
    <div class="p-4 sm:ml-64">
      <div
        class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
      >
        <div
          class="flex p-8 h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800"
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

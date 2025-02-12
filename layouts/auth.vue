<template>
  <div class="dark:bg-gray-800">
    <div class="h-screen p-4 sm:ml-6">
      <div
        class="h-full rounded-lg "
      >
        <div
          class="h-full w-full p-8 mb-4"
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

</script>

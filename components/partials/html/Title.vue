<script setup>
const props = defineProps({
  string: String,
});
</script>

<template>
  <div>
    <div class="text-gray-100 text-4xl pb-10">
      <p>{{ string }}</p>
    </div>
  </div>
</template>

<style lang="">

</style>
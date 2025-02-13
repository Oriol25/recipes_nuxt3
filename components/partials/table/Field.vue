<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
  header: {
    type: Object,
    default: {},
  },
})

const formatDate = (value) => {
  // format 01/01/2022
  const day = new Date(value).getDate().toString().split().length === 1 ? `0${new Date(value).getDate()}` : new Date(value).getDate()
  const month = new Date(value).getMonth().toString().split().length === 1 ? `0${new Date(value).getMonth()}` : new Date(value).getMonth()
  const year = new Date(value).getFullYear()
  const time = new Date(value).toLocaleTimeString()
  return `${day}/${month}/${year} ${time}`
}

</script>

<template>
  <div class="">
    <template v-if="header.type === 'boolean'">
      <label class="mb-5">
        <input type="checkbox" value="" class="sr-only peer" :checked="item" disabled>
        <div
          class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600">
        </div>
      </label>
    </template>
    <template v-else-if="header.type == 'date'">
      {{ formatDate(item) }}
    </template>
    <template v-else-if="header.type == 'avatar'">
      <img class="w-[64px] h-[64px] rounded-full" :src="item ? item : '/img/avatar_default.svg'" alt="image of avatar">
    </template>
    <template v-else>
      {{ item }}
    </template>
  </div>
</template>
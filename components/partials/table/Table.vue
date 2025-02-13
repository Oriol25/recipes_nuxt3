<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div>
    <Search />
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-4 py-3" v-for="(header, index) in headers" :key="index">
              {{ header.label }}
            </th>
            <th scope="col" class="px-4 py-3">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:border-gray-700" v-for="(item, i) in data.items" :key="i">
            <template v-for="(header, k) in headers">
              <th v-if="header.primary" :key="k" scope="row"
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Field :item="item[header.key]" :header="header" />
              </th>
              <td v-else :key="`_${k}`" class="px-4 py-3">
                <Field :item="item[header.key]" :header="header" />
              </td>
            </template>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>

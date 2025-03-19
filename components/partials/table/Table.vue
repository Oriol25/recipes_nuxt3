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
  new_url: {
    type: String,
    default: null,
  },
  new_text: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div>
    <Search :new_url="new_url" :new_text="new_text" />
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
            <td class="px-4 py-3 flex items-center justify-end">
              <button id="apple-watch-se-dropdown-button" data-dropdown-toggle="apple-watch-se-dropdown"
                class="inline-flex items-center px-0.5 py-6 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div id="apple-watch-se-dropdown"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="apple-watch-se-dropdown-button">
                  <li>
                    <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                  </li>
                  <li>
                    <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :currentPage="data.page" :total="data.totalItems" :perPage="data.perPage"
        :lastPage="data.totalPages" />
    </div>
  </div>
</template>

<script setup>
const headers = [
  {
    "type": "avatar",
    "label": "Avatar",
    "key": "avatar"
  },
  {
    "type": "text",
    "label": "Name",
    "key": "name",
    "primary": true
  },
  {
    "type": "text",
    "label": "Email",
    "key": "email"
  },
  {
    "type": "boolean",
    "label": "Verified",
    "key": "verified"
  },
  {
    "type": "date",
    "label": "Created",
    "key": "created"
  },
  {
    "type": "date",
    "label": "Updated",
    "key": "updated"
  },
];

const { $pb } = useNuxtApp()
const results = await $pb.collection('users').getList(1, 50)

</script>

<template>
  <div>
    <Table :headers="headers" :data="results" new_url="/users/create" new_text="user" />
  </div>
</template>
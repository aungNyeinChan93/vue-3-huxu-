<script setup>
import { inject, ref } from 'vue';

const users = inject('users');


</script>


<template>
  <div class="bg-gray-500">
    <h1>Async Component</h1>
    <ul v-if="true">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style lang="" scoped></style>

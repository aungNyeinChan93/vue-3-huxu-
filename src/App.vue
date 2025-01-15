<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref ,provide} from 'vue'

const users = ref([
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
  { id: 5, name: 'User 5' },
  { id: 6, name: 'User 6' },
  { id: 7, name: 'User 7' },
  { id: 8, name: 'User 8' },
  { id: 9, name: 'User 9' },
  { id: 10, name: 'User 10' }
]);


provide('users', users);

</script>

<template>

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> ||
        <RouterLink to="/about">About</RouterLink> ||
        <RouterLink to="/test">Test</RouterLink> ||
      </nav>

    </div>
  </header>

  <main>
    <RouterView />
  </main>

</template>

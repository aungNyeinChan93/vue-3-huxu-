<script setup>
import { ref } from 'vue';



const myData = ref();
const error = ref();
const loading = ref(false)

const dataFetch = async () => {
  try {
    loading.value = true
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    myData.value = data;
  } catch (e) {
    error.value = e.message
    console.log(e);

  } finally {
    loading.value = false
  }
}

</script>


<template>
  <div class="w-full h-screen bg-gray-50" >
    <button @click="dataFetch">Data Fetching</button>

    <div v-if="loading">Loading</div>

    <div v-if="myData">
      <pre >{{ myData }}</pre>
    </div>
    <p v-show="error">{{ error }}</p>

    <ul v-if="myData">
      <li v-for="title in myData" :key="title">{{ title.title }}</li>
    </ul>
  </div>
</template>

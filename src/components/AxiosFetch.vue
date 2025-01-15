<script setup>
import axios from 'axios';
import { onMounted, provide, ref } from 'vue';

const data = ref();

const datafetch = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    data.value = res.data;
  } catch (error) {
    console.log(error);

  }
}

provide('array',data.value)

onMounted(() => {
  datafetch();
});

</script>


<template>
  <div class="w-full h-100 bg-red-400">
    <li v-for="item in data" :key="item.id">{{ item.id }} {{ item.title }}</li>
  </div>
</template>



<style lang="scss" scoped></style>

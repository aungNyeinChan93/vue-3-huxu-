<script setup>
import { ref, watch} from 'vue';

const name = ref('')
const email = ref('')

watch([name,email],(newVal,oldVal)=>{
  console.log(oldVal[0]);
  console.log(newVal);
})

</script>


<template>
  <div class="w-full h-screen bg-gray-200">
    <h1 class="text-center text-2xl">Watcher</h1>
    <p>{{ name }}</p>
    <form >
      <input type="text" v-model="name">
      <input type="email" v-model="email">
    </form>
  </div>

</template>


<style lang="scss" scoped>

</style>

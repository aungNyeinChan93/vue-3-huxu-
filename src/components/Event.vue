<script setup>
import { ref } from 'vue';


const emit = defineEmits(['test',"secretEvent"])

const secrets = ref('12313*^&^*^')

emit('secretEvent',{data:secrets.value})

const eventEmit = () => {
  emit('test',{name:'test emit',value:'testing value'})
}
</script>


<template>
  <div class="bg-red-200 w-full h-screen">
    <h1>Event</h1>

    <button @click="eventEmit"> Test Emit</button> <br>

    <h1 @click="$emit('secretEvent')">Secret</h1>


  </div>
</template>


<style lang="scss" scoped></style>

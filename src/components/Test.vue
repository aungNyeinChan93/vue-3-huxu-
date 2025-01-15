<script setup>
import { inject } from 'vue';


const props = defineProps({
  name:String,
  required:true,
  default:'default name',
  users:Array
})

let customers = inject('customers')

</script>


<template>
  <div class="min-w-full bg-gray-50">
    <h4 class="">Test Component || {{ name }}</h4>
    <ul>
      <li :class="$style.test" v-for="customer in customers" :key="customer.id">{{ customer.name }}</li>
    </ul>
    <ul>
      <li :class="[$style['test-2'],$style.test]" v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>



<style scoped>
  div{
    background: rgb(177, 169, 169);
  }
</style>

<style module>
  .test{
    border: 10px solid rgb(76, 94, 175);
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }

  .test-2{
    color: red;
  }
</style>

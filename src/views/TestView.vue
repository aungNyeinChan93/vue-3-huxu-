<script setup>
import Test from '@/components/Test.vue';
import { defineAsyncComponent, inject, onMounted, provide, ref } from 'vue';
import useCustomers from '@/composable/useCustomers';

const name = ref('test')

const AsyncComponent = defineAsyncComponent(()=> import('@/components/AsyncComponent.vue'))

const customers = ref([
  { id: 1, name: "Customer 1" },
  { id: 2, name: "Customer 2" },
  { id: 3, name: "Customer 3" },
  { id: 4, name: "Customer 4" },
  { id: 5, name: "Customer 5" },
  { id: 6, name: "Customer 6" },
  { id: 7, name: "Customer 7" },
  { id: 8, name: "Customer 8" },
  { id: 9, name: "Customer 9" },
  { id: 10, name: "Customer 10" },
]);

const users = inject('users');

const status = ref(false);

provide('customers', customers);

const templateRef = ref(null)

onMounted(()=>{
  templateRef.value.style.color = 'red'
})

const changeName = ()=>{
  templateRef.value.textContent = 'hello'
}

const ourCustomers = useCustomers();

const filter = (gender)=>{
  ourCustomers.customers.value = ourCustomers.gender_filter(gender);
}

</script>

<template>
  <div>
    <Test  :name="name" :users="users" />
    <button ref="templateRef" @click="changeName"> tempalate Ref</button>
    <hr>

    <div v-if="status">
      <AsyncComponent />
    </div>
    <button @click="status =!status" class="px-2 py-1 rounded bg-green-400">Change</button>

    <hr>

    <ul>
      <li v-for="customer in ourCustomers.customers.value" :key="customer.id">{{ customer.name }} || {{ customer.gender }}</li>
      <button class="px-2 py-1 rounded-xl bg-red-600"  @click="filter('Male')">male</button>
      <button class="px-2 py-1 rounded-xl bg-red-600"  @click="filter('Female')">female</button>
      <button class="px-2 py-1 rounded-xl bg-red-600"  @click="filter()">All</button>
    </ul>


  </div>
</template>

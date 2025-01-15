<script setup>
import { ref } from 'vue';


const newTask = ref('')
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1);
}

// const removeTask = (id) => {
//   tasks.value.filter(task => task.id !== id);
// }

</script>


<template>
  <div class="w-full h-screen bg-green-100 flex  justify-center items-center ">

    <div class="todo-app p-2 ">
      <div class="my-2">
        <input type="text" v-model="newTask" placeholder="task" @keyup.enter="addTask">
        <button class="px-2 mx-1 rounded bg-red-300 " @click="addTask">Add Task</button>
      </div>
      <div class="my-2">
        <ul>
          <li class="p-2" v-for="(task, index) in tasks" :key="index"><span class="px-2 py-1  rounded-full bg-green-400"
              @click="removeTask(index)">{{ task }}</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>

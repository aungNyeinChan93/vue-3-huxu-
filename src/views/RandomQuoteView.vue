<script setup>
import { onMounted, ref } from 'vue';

const ramdomQuotes = ref([
  {
    title: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    title: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    title: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    title: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    title: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  },
  {
    title: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    title: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    title: "Life is short, and it's up to you to make it sweet.",
    author: "Sarah Louise Delany"
  },
  {
    title: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson"
  },
  {
    title: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  }
])

const currentQuote = ref({
  title: null,
  author: null,
})


const randomQuoteGenerate = () => {
  const number = Math.floor(Math.random() * ramdomQuotes.value.length);
  currentQuote.value = ramdomQuotes.value[number];
}

onMounted(() => {
  randomQuoteGenerate();
});

</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">

    <div class="random-app p-6 rounded w-[400px] h-[200px] text-center bg-green-400 ">
      <div class="p-2 border border-red-400 rounded my-2">
        <p>{{ currentQuote.title }}</p>
        <cite class="text-gray-100/90 text-sm">{{ currentQuote.author }}</cite>
      </div>
      <button @click="randomQuoteGenerate" class="px-2 py-1 rounded bg-gray-50">Generate</button>
    </div>

  </div>
</template>



<style lang="scss" scoped></style>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

function changeColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <button class="w-32 h-12 border-solid border-2 border-sky-500  rounded-full" @click="changeColorMode">
      change mode
    </button>
    <h1 class="p-10">
      Home
    </h1>
    <p>Home page content goes here</p>
  </div>
</template>

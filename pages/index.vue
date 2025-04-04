<script setup lang="ts">
import { Button } from '~/components/ui/button'

function onClick() {

}
</script>

<template lang="html">
  <div>
    <h1 class="text-my-red font-bold">
      Welcome to Nuxt 3
    </h1>
    <p>
      This is a simple Nuxt page
    </p>
    <Button class="flex w-full" @click.prevent="onClick">
      Test 123
    </Button>
  </div>
</template>

<style scoped></style>

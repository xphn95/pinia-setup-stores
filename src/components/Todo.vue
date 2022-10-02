<script setup lang="ts">
import { useTodoStore } from '~/stores'

const todoStore = useTodoStore()
</script>

<template>
  <div>
    <input
      v-model="todoStore.newItem"
      type="text"
    >
    <button @click="todoStore.addItem">
      add
    </button>
    <ul
      v-for="item of todoStore.items"
      :key="item.id"
    >
      <todo-item :item="item" />
    </ul>
  </div>
</template>

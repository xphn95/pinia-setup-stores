<script setup lang="ts">
import type { Item } from '~/stores'
import { useTodoStore } from '~/stores'

defineProps<{item: Item}>()

const todoItem = useTodoStore()
</script>

<template>
  <div>
    <li @click="todoItem.removeItem(item)">
      <span>{{ item.id }}</span>-<span>{{ item.context }}</span>
    </li>
  </div>
</template>

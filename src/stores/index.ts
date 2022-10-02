export type Item = {
  id: number
  context: string
}

let id = 1
const generateId = (): number => id++

export const useTodoStore = defineStore('todo', () => {
  const newItem = ref<string>('')
  const items = ref<Item[]>([])

  function addItem (): void {
    items.value.push({
      id: generateId(),
      context: newItem.value
    })
    newItem.value = ''
  }

  function removeItem (item: Item): void {
    const index = items.value.indexOf(item)
    items.value.splice(index, 1)
  }
  return {
    newItem,
    items,
    addItem,
    removeItem
  }
})

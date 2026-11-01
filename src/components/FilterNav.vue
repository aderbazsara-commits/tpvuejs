<template>
  <div class="filter-nav">
    <button
      v-for="f in filters"
      :key="f.value"
      :class="{ active: modelValue === f.value }"
      @click="$emit('update:modelValue', f.value)"
    >
      {{ f.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  props: {
    modelValue: { type: String, default: 'all' }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      filters: [
        { value: 'all', label: 'Tous' },
        { value: 'junior', label: 'Débutant (0-2 ans)' },
        { value: 'confirme', label: 'Confirmé (3-5 ans)' },
        { value: 'senior', label: 'Senior (6+ ans)' }
      ]
    }
  }
}
</script>

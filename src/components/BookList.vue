<template>
  <div class="book-list">
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
    >
      <template #actions>
        <p>Consultez ce livre dans notre catalogue.</p>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  components: {
    BookCard
  },

  props: {
    books: {
      type: Array,
      required: true
    }
  },

  emits: ['toggle-fav']
}
</script>
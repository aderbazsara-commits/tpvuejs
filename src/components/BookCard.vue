<template>
  <div class="book-card">
    <h3>{{ book.title }}</h3>
    <p>Auteur : {{ book.author }}</p>

    <span v-if="book.isFav">⭐ Favori</span>

    <slot name="actions"></slot>

    <button @click="$emit('toggle-fav', book.id)">
      {{ book.isFav ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
      validator(book) {
        return typeof book.title === 'string' && book.title.trim() !== ''
      }
    }
  },

  emits: ['toggle-fav']
}
</script>
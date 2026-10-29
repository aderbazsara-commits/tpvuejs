<template>
  <form @submit.prevent="addBook">
    <input
      ref="titreInput"
      v-model="title"
      type="text"
      placeholder="Titre du livre"
      required
    />

    <input
      v-model="author"
      type="text"
      placeholder="Auteur"
      required
    />

    <button type="submit">Ajouter le livre</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: ''
    }
  },

  emits: ['add-book'],

  mounted() {
    this.$refs.titreInput.focus()
  },

  methods: {
    addBook() {
      this.$emit('add-book', {
        id: Date.now(),
        title: this.title.trim(),
        author: this.author.trim(),
        isFav: false
      })

      this.title = ''
      this.author = ''
      this.$refs.titreInput.focus()
    }
  }
}
</script>
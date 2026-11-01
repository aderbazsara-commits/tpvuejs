<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.author }} -- {{ book.year }}</p>
    <p>{{ book.genre }}</p>
    <span class="badge-favori" v-if="book.isFav">Favori</span>
  </div>
  <div v-else>
    <p>Livre introuvable (id {{ $route.params.id }}).</p>
  </div>

  <!-- TODO 4 : bouton "Retour" avec navigation programmatique -->
  <button @click="retour">Retour</button>
</template>

<script>
import { store } from '../store/books.js'

export default {
  name: 'BookDetailsView',
  data() {
    return { store }
  },
  computed: {
    // TODO 3 : $route.params.id est une CHAÎNE -> on la convertit avec Number()
    // avant de comparer avec les id numériques du store (=== strict).
    book() {
      const id = Number(this.$route.params.id)
      return this.store.books.find(b => b.id === id)
    }
  },
  methods: {
    // TODO 4 : navigation déclenchée depuis le code
    retour() {
      this.$router.back()
    }
  }
}
</script>

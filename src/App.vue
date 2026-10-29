<template>
  <div class="app">
    <h1>Catalogue de livres</h1>

    <p v-show="loading">Chargement des livres...</p>

    <div v-show="!loading">
      <AddBookForm @add-book="addBook" />

      <BookList
        :books="books"
        @toggle-fav="toggleFav"
      />
    </div>
  </div>
</template>

<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

export default {
  components: {
    AddBookForm,
    BookList
  },

  data() {
    return {
      loading: true,

      books: [],

      initialBooks: [
        {
          id: 1,
          title: 'Le Petit Prince',
          author: 'Antoine de Saint-Exupéry',
          isFav: true
        },
        {
          id: 2,
          title: 'Les Misérables',
          author: 'Victor Hugo',
          isFav: false
        },
        {
          id: 3,
          title: 'L’Étranger',
          author: 'Albert Camus',
          isFav: false
        }
      ]
    }
  },

  mounted() {
    setTimeout(() => {
      this.books = this.initialBooks
      this.loading = false
    }, 600)
  },

  methods: {
    addBook(book) {
      this.books.push(book)
    },

    toggleFav(id) {
      const book = this.books.find(book => book.id === id)

      if (book) {
        book.isFav = !book.isFav
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f5f5f5;
}

.app {
  max-width: 800px;
  margin: auto;
}

h1 {
  text-align: center;
}

.book-card {
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
}
</style>

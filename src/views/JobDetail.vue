<template>
  <p class="loading" v-if="loading">Chargement...</p>
  <p class="error" v-else-if="error">{{ error }}</p>

  <div v-else-if="job">
    <h1>{{ job.title }}</h1>
    <p class="company">{{ job.company }}</p>
    <p>{{ job.description }}</p>
    <ul>
      <li>Salaire : {{ job.salary }} MAD</li>
      <li>Expérience requise : {{ job.experience }} an(s)</li>
      <li>Date de création : {{ job.createdAt }}</li>
    </ul>

    <div class="actions">
      <router-link :to="`/jobs/${job.id}/edit`" class="btn">Modifier</router-link>
      <button class="danger" @click="supprimer">Supprimer</button>
      <button @click="$router.back()">Retour</button>
    </div>
  </div>
</template>

<script>
import { api } from '../api.js'

export default {
  name: 'JobDetail',
  data() {
    return { job: null, loading: true, error: null }
  },
  async mounted() {
    try {
      this.job = await api.getOne(this.$route.params.id)
    } catch (err) {
      this.error = 'Emploi introuvable.'
      console.log(err)
    } finally {
      this.loading = false
    }
  },
  methods: {
    async supprimer() {
      // Confirmation avant suppression
      if (!confirm(`Supprimer l'emploi « ${this.job.title} » ?`)) return
      try {
        await api.remove(this.job.id)
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        this.error = 'La suppression a échoué.'
      }
    }
  }
}
</script>

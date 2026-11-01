<template>
  <h1>Modifier l'emploi</h1>
  <p class="loading" v-if="loading">Chargement...</p>
  <p class="error" v-if="error">{{ error }}</p>
  <!-- Le formulaire n'est affiché qu'une fois le job chargé (pré-remplissage) -->
  <JobForm v-if="job" :job="job" submit-label="Enregistrer" @submit="modifier" />
</template>

<script>
import JobForm from '../components/JobForm.vue'
import { api } from '../api.js'

export default {
  name: 'EditJob',
  components: { JobForm },
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
    async modifier(jobData) {
      try {
        await api.update(this.job.id, jobData)
        this.$router.push(`/jobs/${this.job.id}`)
      } catch (err) {
        console.log(err)
        this.error = 'La modification a échoué.'
      }
    }
  }
}
</script>

<template>
  <h1>Offres d'emploi</h1>

  <router-link to="/add" class="btn">+ Ajouter un emploi</router-link>

  <FilterNav v-model="filter" />

  <p class="loading" v-if="loading">Chargement...</p>
  <p class="error" v-else-if="error">{{ error }}</p>
  <p v-else-if="filteredJobs.length === 0">Aucun emploi trouvé.</p>

  <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import JobCard from '../components/JobCard.vue'
import { api } from '../api.js'

export default {
  name: 'Home',
  components: { FilterNav, JobCard },
  data() {
    return { jobs: [], filter: 'all', loading: true, error: null }
  },
  computed: {
    filteredJobs() {
      switch (this.filter) {
        case 'junior': return this.jobs.filter(j => j.experience <= 2)
        case 'confirme': return this.jobs.filter(j => j.experience >= 3 && j.experience <= 5)
        case 'senior': return this.jobs.filter(j => j.experience >= 6)
        default: return this.jobs
      }
    }
  },
  async mounted() {
    try {
      this.jobs = await api.getAll()
    } catch (err) {
      this.error = 'Impossible de charger les emplois. json-server est-il lancé (npm run server) ?'
      console.log(err)
    } finally {
      this.loading = false
    }
  }
}
</script>

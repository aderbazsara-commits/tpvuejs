<template>
  <div class="job">
    <h3>{{ job.title }}</h3>
    <p class="company">{{ job.company }}</p>
    <p>{{ job.salary }} MAD -- {{ job.experience }} an(s) d'expérience</p>
    <router-link :to="`/jobs/${job.id}`">Voir détails</router-link>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: { type: Object, required: true }
  }
}
</script>

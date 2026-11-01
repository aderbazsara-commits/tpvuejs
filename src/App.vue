<template>
  <nav>
    <router-link to="/">Emplois</router-link>
    <router-link to="/add">Ajouter un emploi</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

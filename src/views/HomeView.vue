<template>
  <v-app app>
    <TopBar></TopBar>
    <v-main>
     
        <router-view :key="$route.path"></router-view>
     
  </v-main>

  </v-app>
</template>

<script>
import TopBar from '../components/TopBar.vue'

// import Nav from '../components/Nav'
export default {
  components: { TopBar }
}
</script>

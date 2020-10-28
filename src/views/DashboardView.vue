<template>
  <v-app
    id="dashboard-view"
    dark>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardView',
  metaInfo () {
    return {
      title: 'Covid 19 Information'
    }
  }
}
</script>

<style>

</style>

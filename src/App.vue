<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<style lang="scss">
@import "@/styles/index.scss";

  /* Remove in 1.2 */
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
    }
</style>
<script>
export default {
data: () => ({
    loader: undefined
  }
),
created: function () {
  this.$store.watch(
      (state) => {
        return this.$store.getters.isLoading
      },
      (val) => {
        if (val === true && this.loader === undefined) {
        this.loader = this.$loading.show({ canCancel: false })
        } else {
         this.loader.hide()
         this.loader = undefined
       }
       },
      {
        deep: false
      }
      )
}
}
</script>

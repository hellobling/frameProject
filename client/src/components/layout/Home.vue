<template>
  <div class="app-wrapper">
    <v-head></v-head>
    <app-main></app-main>
    <v-foot></v-foot>
  </div>
</template>
<script>
import vHead from './Header.vue'
import appMain from './AppMain.vue'
import vFoot from './Footer.vue'
export default {
  components: {
    vHead,
    appMain,
    vFoot
  }
}
</script>
<style scoped>

</style>

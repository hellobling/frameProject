<template>
  <div class="app-wrapper">
    <v-head></v-head>
    <app-main></app-main>
    <v-foot></v-foot>
    <loading v-show="loading" v-cloak :loading="loading" ></loading>
    <simple-message
      :type="message.type"
      :msg="message.msg"
      :showClose="message.showClose"
      :show="showMessage"
      @close="closeMessageBox"></simple-message>
  </div>
</template>
<script>
import _ from 'lodash'
import vHead from './Header.vue'
import appMain from './AppMain.vue'
import vFoot from './Footer.vue'
import Loading from '../common/Loading.vue'
import SimpleMessage from '../common/SimpleMessage.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showMessage: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.common.loading,
      message: state => state.common.message
    })
  },
  watch: {
    message: {
      handler () {
        if (!_.isEmpty(this.message)) {
          this.showMessage = true
        } else {
          this.showMessage = false
        }
      },
      deep: true
    }
  },
  components: {
    vHead,
    appMain,
    vFoot,
    Loading,
    SimpleMessage
  },
  methods: {
    closeMessageBox () {
      this.showMessage = false
    }
  }
}
</script>
<style scoped>

</style>

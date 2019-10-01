<template>
  <div class="simple-message"></div>
</template>

<script>
export default {
  name: 'SimpleMessage',
  props: {
    type: {
      type: String,
      default: 'info' // info | 'error' | 'warning' | 'success'
    },
    mesg: String,
    show: Boolean,
    duration: {
      type: Number,
      default: 3000
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  watch: {
    show () {
      if (this.show) {
        this.$message({
          type: this.type,
          message: this.msg,
          showClose: this.showClose
        })
        setTimeout(() => {
          this.$emit('close')
        }, this.duration)
      }
    }
  }
}
</script>

<style>

</style>

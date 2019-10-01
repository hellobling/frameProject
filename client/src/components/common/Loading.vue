<template>
  <div></div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loading'],
  data () {
    return {
      load: null
    }
  },
  watch: {
    loading () {
      if (this.loading) {
        this.load = this.$loading({
          lock: true,
          text: this.getLoadingText(),
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, .3)'
        })
      } else {
        this.load.close()
      }
    }
  },
  methods: {
    getLoadingText () {
      let descArr = ['哈士奇', '萨摩', '雪纳瑞', '金毛']
      return descArr[Math.floor(Math.random() * descArr.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg{
    position: fixed;
    top: 0;
    right:0;
    bottom: 0;
    background-color: #000;
    opacity: .5;
  }
  .box {
    font-size:14px;
    top: 35%;
    left: 44%;
    color:#000;
    position: fixed;
    img {
      position: relative;
      top: 3px;
      margin-right: 5px;
    }
  }
</style>

<template>
  <div class="taskDetail">
    <div class="backTo">
        <el-button v-on:click="back" class="back">返回</el-button>
    </div>
    <div class="content">详情</div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .taskDetail {
    .backTo {
      text-align:left;
      .back {

      }
    }
  }
</style>

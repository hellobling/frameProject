<template>
  <div class="menu-tab">
    <el-button-group>
      <el-button @click="gotoPage('homePage')" :class="{'isActiveBtn':isActiveBtn('homePage')}">
        <span>首页</span>
      </el-button>
      <el-button @click="gotoPage('animal-list')" :class="{'isActiveBtn':isActiveBtn('animal-list')}">
        <span>animal列表</span>
      </el-button>
      <el-button @click="gotoPage('user-list')" :class="{'isActiveBtn':isActiveBtn('user-list')}">
        <span>user列表</span>
      </el-button>
      <el-button>
        <span>music列表</span>
      </el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  name: 'MenuTab',
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    gotoPage (path) {
      this.$router.push({ // 编程式导航
        name: path
      })
    },
    isActiveBtn (btnName) {
      let btnNameList = btnName.indexOf('|') !== -1 ? btnName.split('|') : [btnName]
      return btnNameList.indexOf(this.routeName) !== -1
    }
  }
}
</script>
<style lang="stylus" scoped>
  .menu-tab {
    height:60px;
    background:#5e6d82;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .el-button-group>.el-button.isActiveBtn {
    background:#00d95E;
    color:#fff;
  }
</style>

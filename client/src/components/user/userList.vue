<template>
  <div class="userList">
    <el-table
    :data="userList"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span class="detailBtn" @click="taskDetail(scope.row)">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.fetchUserList().catch(e => {})
  },
  computed: {
    ...mapState({
      userList: state => state.user.userList || []
    })
  },
  methods: {
    ...mapActions([
      'fetchUserList'
    ]),
    taskDetail (row) {
      this.$router.push({
        name: 'task-detail',
        query: {
          taskId: row.id
        }
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .userList {
    .detailBtn {
      cursor:pointer;
      &:hover {
        color:#00d95e;
      }
    }
  }
</style>

<template>
  <div id="table">
    <el-row>
      <el-button type="primary" round @click="sortByStatus()">All</el-button>
      <el-button type="success" round @click="sortByStatus(0)">未取件</el-button>
      <el-button type="info" round @click="sortByStatus(1)">已预约</el-button>
      <el-button type="warning" round @click="sortByStatus(2)">已取件</el-button>
      <el-button type="primary" round @click="add">添加</el-button>
    </el-row>
    <el-table
      :data="data"
      border
      style="width: 100%">
      <el-table-column
        prop="trackingNumber"
        label="运单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="recipient"
        label="收件人">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="status"
        :formatter="formatStatus"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="appointmentTime"
        label="预约时间"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="comfirmRecipient(scope.row)" type="text" size="small" v-if="scope.row.status !=2">确认收货</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getAllItem,updateItemStatus,sortBystatus} from '../api/package'

  export default {
    name: "List",
    mounted() {
      this.getAll()
    },
    data() {
      return {
        data: []
      }
    },
    methods:{
      getAll(){
        getAllItem().then((res) => {
          this.data = res
        })
      },
      comfirmRecipient(item){
        this.$confirm('您确定该物品已收货吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          item.status = 2
          updateItemStatus(item).then(() => {
            this.$message({
              message: '确认收货',
              type: 'success'
            });
            this.getAll()
          })
        })
      },
      formatStatus(row, column, cellValue){
        return row.status === 0 ? '未取件' : row.status === 1 ? '已预约' : '已取件'
      },
      sortByStatus(status){
        sortBystatus(status).then((res) => {
          this.data = res
        })
      },
      add(){
        this.$router.push({path:'/create'})
      }
    }
  }
</script>

<style scoped>

</style>

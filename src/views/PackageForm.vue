<template>
  <div id="form">
    <el-form label-position="left" label-width="80px" :model="package">
      <el-form-item label="运单号">
        <el-input v-model="package.trackingNumber"></el-input>
      </el-form-item>
      <el-form-item label="收件人">
        <el-input v-model="package.recipient"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="package.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="重量">
        <el-input v-model="package.weight"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create">立刻创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {createPackage} from '../api/package'

  export default {
    name: "PackageForm",
    data() {
      return {
        package: {
          trackingNumber: '',
          appointmentTime: '',
          phoneNumber: '',
          weight: 0.0
        }
      };
    },
    methods: {
      create() {
        createPackage(this.package).then(() => {
          this.$router.push({path:'/'})
        })
      }
    }
  }
</script>

<style scoped>

</style>

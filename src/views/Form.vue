<template>
    <div id="form">
      <el-form label-position="left" label-width="80px" :model="package">
        <el-form-item label="运单号">
          <el-input v-model="package.trackingNumber"></el-input>
        </el-form-item>
        <el-form-item label="预约时间">
          <el-date-picker
            v-model="package.appointmentTime"
            type="datetime"
            value-format=" yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="comfirm">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {updateItemStatus} from "@/api/package";

  export default {
        name: "Form",
      data() {
        return {
          package: {
            trackingNumber: '',
            appointmentTime: '',
          }
        };
      },
      methods:{
        comfirm(){
          this.package.status = 1;
          updateItemStatus(this.package).then(() => {
          })
        }
      }
    }
</script>

<style scoped>

</style>

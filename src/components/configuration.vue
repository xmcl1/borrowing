<template>
  <div class="configuration">
    <div class="left">
      <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>-->

      <el-tabs :tab-position="tabPosition" style="height: 100%;">
        <el-tab-pane label="系统锁屏">
          <el-switch v-model="lockScreen" active-text="开启锁屏" inactive-text="关闭锁屏"></el-switch>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "configuration",
  data() {
    return {
      tabPosition: "left",
      lockScreen: true
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.configuration {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.configuration > .left {
  float: left;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

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
          <el-switch
            @change="isLockFn"
            v-model="lockScreen"
            active-text="开启锁屏"
            inactive-text="关闭锁屏"
          ></el-switch>
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
      lockScreen: null
    };
  },
  mounted() {
    this.isLock(); //页面加载判断localStorage中是isLock的值是true还是false（字符串类型）
  },
  methods: {
    isLock() {
      var isLock = localStorage.getItem("isLock");
      if (isLock == "true") {
        this.lockScreen = true;
      } else {
        this.lockScreen = false;
      }
    },
    isLockFn(val) {
      // console.log(val);
      if (val) {
        localStorage.setItem("isLock", true);
        this.bus.$emit("isLock", true);
      } else {
        localStorage.setItem("isLock", false);
        this.bus.$emit("isLock", false);
      }
    }
  }
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

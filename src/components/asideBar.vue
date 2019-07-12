<template>
  <div class="asideBar">
    <i class="el-icon-d-arrow-left" ref="isCollapse" @click="changeCollapse"></i>
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="/home/theOverviewOfBusiness">
          <i class="el-icon-search"></i>
          <span>业务总览</span>
      </el-menu-item>
      <el-submenu index="/home/personalCenter">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>个人中心</span>
        </template>
        <el-menu-item index="/home/myBorrow">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">我的借款</span>
        </el-menu-item>
        <el-menu-item index="/home/settings">
          <span>放款规则设置</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/home/loan">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>放款</span>
        </template>
        <el-menu-item index="/home/lendingOverview">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">放款总览</span>
        </el-menu-item>
        <el-menu-item index="/home/lendingDetails">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">放款详情</span>
        </el-menu-item>
        <el-menu-item index="/home/loanOfficerStatistics">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">贷款人员统计</span>
        </el-menu-item>
        <el-menu-item index="/home/totalLoanAmountStatistics">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">放款总额度统计</span>
        </el-menu-item>
        <el-menu-item index="/home/loanTermStatistics">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">放款期限统计</span>
        </el-menu-item>
        <el-menu-item index="/home/lenderAddressStatistics">
          <!-- <i class="el-icon-menu"></i> -->
          <span slot="title">贷款人住址统计</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/repayment">
        <i class="el-icon-setting"></i>
        <span slot="title">还款</span>
      </el-menu-item>
      <el-menu-item index="/home/blacklist">
        <i class="el-icon-setting"></i>
        <span slot="title">黑名单</span>
      </el-menu-item>
      <el-menu-item index="/home/configuration">
        <i class="el-icon-setting"></i>
        <span slot="title">系统配置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "asideBar",
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {
    // console.log(this.$route.path);
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        //箭头选中效果
        this.$refs.isCollapse.classList.add("el-icon-d-arrow-right-rotate");
      } else {
        this.$refs.isCollapse.classList.remove("el-icon-d-arrow-right-rotate");
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.asideBar {
  height: 100%;
  /* background:white; */
  overflow-x: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  height: calc(100% - 36px);
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: left;
  padding-left: 4px;
}
.el-menu-vertical-demo.el-menu--collapse.el-menu {
  height: calc(100% - 36px);
}
.el-icon-d-arrow-left,
.el-icon-d-arrow-right {
  display: block;
  font-size: 24px;
  transition: all 0.5s;
  padding: 6px 0;
  cursor: pointer;
  color: #ababab;
}
.el-icon-d-arrow-right-rotate {
  transform: rotate(-180deg);
}
.el-submenu .el-menu-item {
  text-indent: 14px;
}
.el-submenu__title span {
  font-weight: bold;
  font-size: 14px;
}
.el-menu-vertical-demo.el-menu > li.el-menu-item {
  font-weight: bold;
  font-size: 14px;
}
.el-menu-item.is-active {
  background: #dae8f7;
}
</style>


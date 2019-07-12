<template>
  <div class="myContent">
    <div class="top">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadcrumbParams" :key="item">{{item}}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>
    <div class="con">
      <!-- <personal-center></personal-center> -->
      <router-view />
    </div>
  </div>
</template>

<script>
// import personalCenter from "@/components/myContent/personalCenter.vue";

export default {
  name: "myContent",
  data() {
    return {
      breadcrumbParams: ""
    };
  },
  components: {
    // personalCenter
  },
  watch: {
    "$route.path": {
      handler(newP, oldP) {
        // console.log("newP:"+newP);
        // console.log("oldP:"+oldP);
        this.getBreadcrumb();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getBreadcrumb() {
      this.breadcrumbParams = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style scoped>
.myContent > .top {
  height: 36px;
}
.myContent > .top > .el-breadcrumb {
  line-height: 36px;
  border-bottom: 1px solid #b3c0d1;
}
.con {
  height: calc(100% - 37px);
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px 0px 20px 0px #b7b7b7;
}
</style>

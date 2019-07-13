<template>
  <div class="home">
    <div class="myHeader">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo_01.png" />
        </router-link>
      </div>
      <div class="loginHeader">
        <span class="userName">{{userName}}</span>
        <el-button size="mini" @click="logout">退出</el-button>
      </div>
    </div>
    <el-container>
      <el-header>贷款业务管理系统</el-header>
      <el-container>
        <el-aside width="unset">
          <aside-bar></aside-bar>
        </el-aside>
        <el-main>
          <my-content></my-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideBar from "@/components/asideBar.vue";
import myContent from "@/components/myContent.vue";

export default {
  name: "home",
  components: {
    asideBar,
    myContent
  },
  data() {
    return {
      userName: "",
      userpass: "",
      lockScreen: null //系统锁屏（休息）
    };
  },
  mounted() {
    this.isLock(); //系统锁屏（模拟）
    this.getUser(); //获取登录用户名
  },
  methods: {
    isLock() {
      //系统锁屏（模拟）
      var _this = this;
      var isLock = localStorage.getItem("isLock");
      if (isLock == "true") {
        //页面首次加载判断是否需要执行锁屏倒计时
        this.lock();
      }
      this.bus.$on("isLock", val => {
        console.log(val);
        if (val && !_this.lockScreen) {
          this.lock();
        } else if (!val && _this.lockScreen) {
          window.clearInterval(_this.lockScreen);
          _this.lockScreen = null;
        }
      });
    },
    lock() {
      var _this = this;
      var lockTimeStorage = Number(localStorage.getItem("lockTime"));
      var lockTime = lockTimeStorage || 5; //秒
      document.body.onmousemove = function() {
        lockTime = lockTimeStorage || 5; //秒
      };
      this.lockScreen = setInterval(() => {
        console.log(lockTime);
        lockTime--;
        if (lockTime <= 0) {
          window.clearInterval(this.lockScreen);
          localStorage.removeItem("isLogin");
          _this.$router.push({
            name: "lock"
          });
        }
      }, 1000);
    },
    getUser() {
      //页面加载获取localStorage中的用户名
      var username = localStorage.getItem("username");
      var isLogin = localStorage.getItem("isLogin");
      if (username && isLogin) {
        this.userName = username;
      }
      // else {
      //   this.$router.push("/login");
      // }
      // console.log("username---" + username);
    },
    logout() {
      window.clearInterval(this.lockScreen);
      localStorage.removeItem("isLogin");
      localStorage.removeItem("username");
      this.$router.push("/login");
    }
  },
  beforeDestroy() {
    this.bus.$off();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myHeader {
  width: 100%;
  height: 35px;
  position: absolute;
  background: #b3c0d1;
  box-shadow: 0 12px 16px 0px rgba(51, 51, 51, 0.3);
  left: 0;
  top: 0;
  padding: 0 40px;
  box-sizing: border-box;
}
.logo {
  height: 100%;
  float: left;
}
.logo img {
  height: 100%;
}
.loginHeader {
  height: 100%;
  float: right;
}
.loginHeader > .userName {
  font-weight: bold;
  font-size: 12px;
  line-height: 35px;
}
.home {
  height: 100%;
}
.home > section {
  height: 100%;
  box-shadow: 12px 12px 16px 0px rgba(51, 51, 51, 0.3);
}
/* 左侧超出垂直方向滚动条 */
.el-container {
  height: calc(100% - 60px);
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 4px 5px 3px dimgrey;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0 12px 12px;
}
.myContent {
  height: 100%;
}
</style>

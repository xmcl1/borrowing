<template>
  <div class="login">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="70px"
      class="demo-ruleForm"
      @submit.native.prevent
    >
      <el-form-item
        label="管理员"
        prop="administrator"
        :rules="[
          { required: true, message: '管理员账号不能为空'}
        ]"
      >
        <el-input
          prefix-icon="iconfont el-icon-yonghu"
          v-model="numberValidateForm.administrator"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          { required: true, message: '密码不能为空'}
        ]"
      >
        <el-input
          prefix-icon="iconfont el-icon-mima"
          type="password"
          v-model="numberValidateForm.password"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="submitForm('numberValidateForm')">登录</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      numberValidateForm: {
        administrator: "",
        password: ""
      }
    };
  },
  mounted() {
    localStorage.removeItem("username"); //清除用户名
    //防止页面后退
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  methods: {
    submitForm(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var loading = _this.openFullScreen(); //打开loading
          _this.axios
            .post("/api/login", {
              username: _this.numberValidateForm.administrator,
              userpass: _this.numberValidateForm.password
            })
            .then(res => {
              if (res.data.code != 1) {
                _this.$notify.error({
                  title: "登录验证失败",
                  message: "用户名或密码错误！",
                  duration: 2000
                });
                loading.close(); //关闭loading
                return;
              }
              _this.$notify({
                title: "登录验证成功",
                message: "正在跳转······",
                type: "success",
                duration: 1500
              });
              // console.log(res);
              localStorage.setItem(
                "username",
                _this.numberValidateForm.administrator
              );
              localStorage.setItem("isLogin", true); //是否登录标识符

              setTimeout(() => {
                loading.close(); //关闭loading
                _this.$router.push({
                  //验证通过（跳转首页，并传参）
                  name: "home"
                  // params: {
                  //   username: "辉仔",
                  //   userpass: _this.numberValidateForm.password
                  // }
                });
              }, 1000);
            })
            .catch(res => {
              _this.$notify.error({
                title: "登录失败",
                message: "服务器连接失败",
                duration: 2000
              });
              loading.close(); //关闭loading
            });
        } else {
          //验证不通过
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      return loading;
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);
    }
  }
};
</script>

<style scoped>
.login {
  width: 500px;
  height: 350px;
  background: white;
  box-shadow: 0 12px 16px 0px rgba(51, 51, 51, 0.3);
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
}
.demo-ruleForm {
  margin: auto;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
body {
  padding: 75px 40px 40px;
  /* 2 18 36 */
  background: url("./assets/img/2.jpg") no-repeat center;
  background-size: 100% 100%;
  /* background-size: cover; */
  /* background: lightgray; */
  box-sizing: border-box;
}
#app {
  height: 100%;
}
/* 全局滚动条设置 */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  /* background:black; */
}
::-webkit-scrollbar-thumb {
  background: #9E9E9E;
  border-radius: 3px;
}

/* input框全局设置 */
.el-input__inner {
  height: 30px;
  width: 300px;
}

/* button全局设置 */
.el-button {
  width: 60px;
  height: 30px;
  font-size: 12px;
  padding: 0;
}
</style>

<template>
  <div class="noPage">
    <img src="@/assets/img/4045.jpg" />
  </div>
</template>

<script>
export default {
  name: "noPage"
};
</script>

<style scoped>
img {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.noPage {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
}
</style>

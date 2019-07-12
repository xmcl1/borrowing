<template>
  <div class="theOverviewOfBusiness">
    <div v-for="item in list" :key="item.id">
      <div>{{item.id}}</div>
      <div>{{item.name}}</div>
      <div>{{item.url}}</div>
      <div>{{item.alexa}}</div>
      <div>{{item.country}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theOverviewOfBusiness",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.axios.get("/api/home").then(res => {
        if (res.data) {
          this.list = res.data;
        }
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
.theOverviewOfBusiness {
  box-sizing: border-box;
}
</style>

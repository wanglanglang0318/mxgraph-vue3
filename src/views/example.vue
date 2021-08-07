<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"><Router /></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><Store /></el-tab-pane>
  </el-tabs>
</template>
<script>
import Router from "@/components/router";
import Store from "@/components/store";
export default {
  name: "Example",
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    Router,
    Store,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

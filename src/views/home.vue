<template>
  <img src="../assets/logo.png" />
  <div>
    <p>Hello Vue3</p>
    <el-button type="info"
      ><router-link to="/mxGraph">mxGraph</router-link></el-button
    >
    <el-button type="info"
      ><router-link to="/example">example</router-link></el-button
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

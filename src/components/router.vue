<template>
  <div class="page">
    因为在setup内部没有this访问权限，不能直接使用this访问this.$router 或者
    this.$route。所有使用useRouter, useRoute来获取
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router2 = useRouter();
    console.log("router12", router2);
    // 下面提供了router对应的方法使用大全
    // ------------------------------------------------------
    // router1.addRoute(parentOrRoute, route)
    // router1.afterEach(回调函数)
    // router1.back() 等价于 go(-1)
    // router1.beforeEach(回调函数)
    // router1.beforeResolve(回调函数)
    // router1.currentRoute 获取当前路由：如： {_rawValue: {…}, _shallow: true, __v_isRef: true, _value: {…}}
    // router1.forward() 等价于 go(1)
    // router1.getRoutes: ƒ getRoutes()
    // router1.go(delta) 等价于 routerHistory.go(delta) 跳到指定历史记录
    // router1.hasRoute(name) 判断是否有对应的路由
    // router1.isReady() 判断路由是否准备跳转
    // router1.onError(回调函数) 当发生错误的时候执行的
    // router1.options 获取所有路由信息 {history: {…}, routes: Array(5)}
    // router1.push(to) 跳转到指定路由对应的页面，有历史记录
    // router1.removeRoute(name) 动态的删除某个路由
    // router1.replace(to) 直接跳转到指定路由页面，没有历史记录
    // router1.resolve(rawLocation, currentLocation)  可以自定义跳转参数的方法
    return {};
  },
  mounted() {
    // 第三种方法：获取路由对象 router 的方法3
    console.log(this.$router);
  },
};
</script>

<template>
  <div class="page">
    因为在setup内部没有this访问权限，不能直接使用this访问this.$router 或者
    this.$route。所有使用useRouter, useRoute来获取
  </div>
</template>
<script>
import { getCurrentInstance } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // 第一种方法：获取路由对象 router 的方法1
    const vue = getCurrentInstance();
    const store1 = vue.ctx.$store;
    console.log(store1);
    // 第二种方法：获取路由对象 router 的方法2
    const store2 = useStore();
    console.log(store2);

    // 下面提供了：store 对应的属性使用大全
    // ------------------------------------------------------
    // commit(type, payload, options2) 在其他视图中使用mutations中定义的方法
    // dispatch(type, payload) 异步任务 不会改变state 在其他视图中使用actions中定义的方法
    // getters: {}  相当于组件的计算属性 通过 $store.getters.doubleCount 获取计算后的值
    // state: (...)  store中存储的值，就是通过这个在视图中获取store存储的值
    return {};
  },
  mounted() {
    // 第三种方法：获取路由对象 store的方法3
    console.log(this.$store);
  },
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      timer: null, // 定时器
      timerLogin: null, // 定时器--登录用
      isAlert: false  // 登录过期提示弹窗是否弹出
    }
  },
  mounted() {
    let that = this;
    that.timerLogin = setInterval(() => {
      // 提示框未弹出
      if (!that.isAlert) {
        that.api_login();
      }
    }, 10 * 1000);
  },
  methods: {
    // 验证是否登录
    async api_login() {
      let that = this;
      let result = await this.$api.isLogin();
      console.log(result.data.data.isLogin)
      if (result.data.data.isLogin == false) {
        that.isAlert = true;
        this.$msgbox.alert("登录超时，请重新登录！", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
            .then(() => {  // 确定
              top.location.href = top.location.href + 'logout';  // 登出
            })
            .catch(() => {  // 取消
              that.isAlert = false;
            });
        return false;
      }
    }
  },
  beforeDestroy() {
    let that = this;
    clearInterval(that.timer);
    clearInterval(that.timerLogin);
  }
}
</script>

<style lang="less">

</style>

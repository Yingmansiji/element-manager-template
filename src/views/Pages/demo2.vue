<template>
  <div class="library_page">
    <navigation-menu :routersList="routersList" class="library_page_nav"></navigation-menu>
    <div class="library_page_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu";

export default {
  name: "demo2",
  components: {
    NavigationMenu
  },
  data() {
    return {
      routersList: [
        {path: "/navigator/demo2/demo3", name: "导航一", value: "demo3"},
        {path: "/navigator/demo2/demo4", name: "导航二", value: "demo4"}
      ],
    }
  },

}
</script>

<style lang="less" scoped>
.library_page {
  margin: 15px;
  border-radius: 6px;
  background-color: #FFFFFF;
  overflow: hidden;
  padding: 30px;

  .library_page_content {
    margin-top: 30px;
  }
}
</style>
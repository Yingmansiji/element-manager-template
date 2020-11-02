<template>
  <div class="nav_page">
    <el-row>
      <el-col :span="2">
        <el-menu
            class="el-menu-vertical-demo"
            :router="true"
            :default-active="$route.name"
        >
          <el-menu-item
              v-for="(item, index) in routerOptions"
              :key="index"
              :index="item.name"
              :route="{ name: item.name }"
          >
            <span slot="title">{{ item.value }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 可在全局引入组件或在局部引入组件
import {Row, Col, Menu, MenuItem} from "element-ui";

export default {
  name: "HomePage",
  components: {
    elRow: Row,
    elCol: Col,
    elMenu: Menu,
    elMenuItem: MenuItem
  },
  data() {
    return {
      routerOptions: [
        {
          path: "/demo1",
          name: "demo1",
          value: "无顶部导航"
        },
        {
          path: "/demo2",
          name: "demo2",
          value: "顶部导航"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav_page {
  .el-menu-vertical-demo {
    height: 1500px;
  }
}
</style>

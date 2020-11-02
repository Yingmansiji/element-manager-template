<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in routersList" :key="index">
        <router-link :to="item.path" @click.native="changeRoute(item.value)">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  props: {
    routersList: Array
  },
  methods: {
    changeRoute(val) {
      console.log(val);
    }
  },
}
</script>

<style lang="less" scoped>
.nav {
  color: #8e8e8e;
  overflow: hidden;

  ul {
    list-style: none;

    li {
      float: left;
      margin-right: 52px;
      text-align: center;
    }
  }

  a {
    font-size: 18px;
    color: #ABABAB;
    line-height: 24px;

    &:after {
      content: "";
      display: block;
      width: 45px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0);
      margin: 5px auto;
    }

    &.router-link-exact-active {
      font-size: 18px;
      color: #23B38F;
      line-height: 24px;

      &:after {
        content: "";
        display: block;
        width: 45px;
        height: 2px;
        background-color: #23B38F;
        margin: 5px auto;
      }
    }
  }
}
</style>

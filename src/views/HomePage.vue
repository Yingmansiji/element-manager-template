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
                            v-for="(item, index) in a"
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
    export default {
        name: "HomePage",
        data() {
            return {
                a: [
                    {
                        path: "/a",
                        name: "a",
                        value: "A"
                    },
                    {
                        path: "/b/b-1",
                        name: "b",
                        value: "B"
                    },
                    {
                        path: "/c/c-1",
                        name: "c",
                        value: "C"
                    },
                    {
                        path: "/d",
                        name: "d",
                        value: "D"
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

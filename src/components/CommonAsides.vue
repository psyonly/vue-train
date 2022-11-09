<template>
  <el-menu default-active="1-4-1" 
  class="el-menu-vertical-demo" 
  @open="handleOpen" 
  @close="handleClose" 
  :collapse="isCollapse"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <h3>Backend platform</h3>
    <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.name" :index="item.name">
          <el-menu-item index="1-4-1">{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
  
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    height: 100vh;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
  
  <script>
    export default {
      data() {
        return {
            isCollapse: false,
            menuData: [
                {
                    path: "/Home",
                    name: "home page",
                    icon: "s-home",
                    label: "主页",
                    url: "/home"
                },
                {
                    path: "/Shop",
                    name: "shop page",
                    icon: "s-shop",
                    label: "商品",
                    url: "/shop"
                },
                {
                    label: "Other page",
                    icon: "more",
                    children: [
                        {
                            path: "/ticket",
                            name: "ticket page",
                            icon: "s-ticket",
                            label: "ticket",
                            url: "/other/ticket"
                        },
                        {
                            path: "custom",
                            name: "custom page",
                            icon: "s-custom",
                            label: "custom",
                            url: "/other/custom"
                        }
                    ]
                }
            ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      computed: {
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        noChildren() {
            return this.menuData.filter(item => !item.children)
        }
      }
    }
  </script>
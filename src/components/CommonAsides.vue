<template>
  <el-menu default-active="1-4-1" 
  class="el-menu-vertical-demo" 
  @open="handleOpen" 
  @close="handleClose" 
  :collapse="isCollapse"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <h3>Kcats 管理后台</h3>
    <el-menu-item @click="menuClicked(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item @click="menuClicked(subItem)" v-for="subItem in item.children" :key="subItem.name" :index="subItem.name">
        <span slot="title">{{subItem.label}}</span>
      </el-menu-item>
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
                  path: "/",
                  name: "home page",
                  icon: "s-home",
                  label: "主页",
                  url: "/home"
              },
              {
                  path: "/mall",
                  name: "shop page",
                  icon: "s-shop",
                  label: "商品",
                  url: "/shop"
              },
              {
                  path: "/user",
                  name: "user page",
                  icon: "user",
                  label: "用户",
                  url: "/user"
              },
              {
                  path: "/video",
                  name: "video page",
                  icon: "video-play",
                  label: "视频",
                  url: "/vide"
              },
              {
                  label: "其他",
                  icon: "more",
                  children: [
                      {
                          path: "/pageOne",
                          name: "ticket page",
                          icon: "s-ticket",
                          label: "订单",
                          url: "/other/ticket"
                      },
                      {
                          path: "/pageTwo",
                          name: "custom page",
                          icon: "s-custom",
                          label: "推荐",
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
      },
      menuClicked(item) {
        if (this.$route.path != item.path && !(this.$route.path == "/home" && item.path == "/")) {
          this.$router.push(item.path)
        }
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
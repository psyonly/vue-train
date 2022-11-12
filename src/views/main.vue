<template>
  <el-container>
    <el-aside width="200px">
      <common-asides />
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAsides from '../components/CommonAsides.vue'
import CommonHeader from '../components/CommonHeader.vue'

export default {
  components: { CommonAsides, CommonHeader },
  data() {
    return {}
  }
}
</script>

<style>
.el-header {
  padding: 0;
}
</style>
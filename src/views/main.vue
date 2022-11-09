<template>
    <el-container>
    <el-aside width="200px">
      <common-asides/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAsides from '../components/CommonAsides.vue'

export default {
  components: { CommonAsides },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">Index</span>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/User.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}

</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: aliceblue;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user{
            height: 40px;
            width: 40px;
            border-radius: 15%;
        }
    }
}
</style>
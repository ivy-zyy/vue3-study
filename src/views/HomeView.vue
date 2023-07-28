<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <el-row :gutter="20">
            <el-col :span="4">img</el-col>
            <el-col :span="16"><h2>后台管理系统</h2></el-col>
            <el-col :span="4">退出登录</el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
            <div class="menu-item">菜单</div>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
  }
})
</script>

<style lang="scss">
.home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .header {
        height: 50px;
        line-height: 50px;
        background: #aba8a8;
        text-align: center;
        h2 {
            color: #fff;
        }
    }
    .aside {
        height: 100vh;
        background: #4f4b4b;
        .menu-item {
            height: 30px;
            line-height: 30px;
            padding-top: 20px;
            color:#fff;
            font-size: 18px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>

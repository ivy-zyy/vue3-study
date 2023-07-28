<!--
    * @Description: 404 错误页面
-->
<template>
    <div class="http404-container">
        <div class="pic-404">404</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {
      message: '404 Page Not Found'
    }
  }
})
</script>

<style lang="scss" scoped>

</style>

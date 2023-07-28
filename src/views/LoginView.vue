<template>
    <div class="login-box">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="70px"
            class="demo-ruleForm"
            status-icon>
            <h4>后台管理系统</h4>
            <div class="pb10"></div>
            <el-form-item label="账号：" prop="username">
                <el-input v-model="ruleForm.username" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from '@/type/login'
import type { FormInstance } from 'element-plus'
import { login } from '@/request/login'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const data = reactive(new LoginData())
    const rules = {
      username: [{ required: true, messages: '必填项', trigger: 'blur' }],
      password: [{ required: true, messages: '必填项', trigger: 'blur' }]
    }
    // 登录
    const ruleFormRef = ref<FormInstance>()
    const router = useRouter() // 指向全局路由
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid: any) => {
        if (valid) {
          console.log('submit!21')
          login(data.ruleForm).then((res: any) => {
            // console.log(res, 'res')
            localStorage.setItem('token', res.token)
            // 跳转页面
            router.push('/')
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
    // 重置
    const resetForm = () => {
      data.ruleForm.username = ''
      data.ruleForm.password = ''
    }
    return { ...toRefs(data), rules, resetForm, ruleFormRef, submitForm }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
    background: rgba(20, 20, 82, 0.652);
    padding: 20px;
    height: 100%;
    width: 100%;
    .demo-ruleForm {
        width: 400px;
        padding: 20px;
        margin: 200px auto;
        border-radius: 4px;
        background: #fff;
    }
}
.pb10 {
    padding-bottom: 10px;
}
</style>

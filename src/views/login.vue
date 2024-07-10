<template>
    <div class="login-bg">
        <div class="login-container">
            <div class="login-header">
                <img class="logo mr10" src="../../assets/img/logo.svg" alt="" />
                <div class="login-title">后台管理系统</div>
            </div>
            <div>
                <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign"
                    style="max-width: 600px">
                    <el-form-item label="用户名">
                        <el-input v-model="formLabelAlign.name" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="formLabelAlign.region" />
                    </el-form-item>
                    <div class="pwd-tips">
                        <el-checkbox class="pwd-checkbox" label="记住密码" />
                        <el-link type="primary">忘记密码</el-link>
                    </div>
                    <el-button class="login-btn" type="primary" size="large" >登录</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormProps } from 'element-plus'

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
    name: '',
    region: '',
})
</script>

<style scoped>
.login-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../assets/img/login-bg.jpg) center/cover no-repeat;
}

.login-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}
 
</style>

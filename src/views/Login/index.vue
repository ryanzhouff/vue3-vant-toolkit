<script setup lang="ts">
  //import { login } from '@/services/user/login.service';
  import { ref } from 'vue';

  const username = ref('');
  const password = ref('');

  const onLoginFormSubmit = (values) => {
    console.log(values);
    //login();
  };

  const onFailed = (errorInfo) => {
    console.log(errorInfo);
  };
</script>

<template>
  <div class="login-form">
    <van-form @submit="onLoginFormSubmit" @failed="onFailed">
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          placeholder="用户名"
          autocomplete="off"
          :rules="[{ required: true, message: '请填写用户名' }]"
        ></van-field>
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请填写密码"
          autocomplete="off"
          :rules="[{ required: true, message: '请填写密码' }]"
        ></van-field>
      </van-cell-group>
      <van-button round block type="primary" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
  .login-form {
    padding-top: pxtorem(200);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

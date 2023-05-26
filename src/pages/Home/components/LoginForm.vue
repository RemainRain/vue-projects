<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm'
});
</script>

<template>
  <div class="login">
    <div class="header">
      <div class="active">账号登录</div>
      <div>手机登录</div>
    </div>
    <form>
      <input placeholder="手机号/用户名/邮箱"/>
      <input placeholder="密码"/>
      <div class="forget-pwd">忘记密码</div>
      <button>登录</button>
    </form>
    <div class="other">
      <span>其他登录方式</span>
      <img src="../assets/wechat.png"/>
      <img src="../assets/QQ.png">
    </div>
    <div class="to-register">
      <span>还没有账号？</span><a class="link">立即免费注册</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  //z-index: 100;
  width: 284px;
  height: 325px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 19px 15px;
}

.header {
  color: #565555;
  display: flex;
  justify-content: center;
  font-size: 18px;

  .active {
    color: #FC752E;
  }

  div {
    margin-right: 28px;
  }
}

form {
  margin-top: 17px;

  input {
    border: none;
    width: 253px;
    height: 34px;
    margin-bottom: 15px;
    padding: 10px 12px;
  }

  input::placeholder {
    color: #A7A7A7;
    font-size: 14px;
  }

  input:last-of-type {
    margin: 0;
  }

  .forget-pwd {
    margin-top: 8px;
    text-align: right;
    color: #4E9BFA;
    font-size: 14px;
  }

  button {
    background: #FD6426;
    border-radius: 6px;
    width: 254px;
    border: none;
    height: 33px;
    font-size: 18px;
    color: #fff;
  }
}

.other {
  margin-top: 15px;
  display: flex;
  align-items: center;

  span {
    color: #A7A7A7;
    font-size: 12px;
    margin-right: 9px;
  }

  img {
    width: 21px;
    height: 21px;
    margin-right: 6px;
  }
}

.to-register {
  margin-top: 28px;
  font-size: 14px;
  color: #A7A7A7;
  text-align: center;

  .link {
    color: #4E9BFA;
  }
}
</style>

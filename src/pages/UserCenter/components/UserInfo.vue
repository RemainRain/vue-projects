<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  data () {
    return {
      userInfo: {
        name: 'XX玩家',
        phone: '****',
        ip: '182.151.120.103',
        email: 'PWVI1683508571@163.com',
        loginTime: '2023-05-19 13:37',
        QQ: 'XXXX',
        registerTime: '2023-05-08 09:16',
        wechat: 'XXXX',
        auth: '去认证',
        level: 0,
        experience: 0
      }
    };
  }
});
</script>

<template>
  <div class="container">
    <div class="title">基本信息</div>
    <div class="section">
      <div class="title">个人资料</div>
      <div class="table">
        <div class="row">
          <div class="item">
            <span class="key">个人资料</span>
            <span class="value">{{ userInfo.name }}个人资料</span>
          </div>
          <div class="item">
            <span class="key">绑定手机</span>
            <span class="value">{{ userInfo.phone }}</span>
            <button style="background: #FF5C23">去绑定</button>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <span class="key">登录IP</span>
            <span class="value">{{ userInfo.ip }}</span>
          </div>
          <div class="item">
            <span class="key">绑定邮箱</span>
            <span class="value">{{ userInfo.email }}</span>
            <button style="background: #249BFF">去修改</button>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <span class="key">登录时间</span>
            <span class="value">{{ userInfo.loginTime }}</span>
          </div>
          <div class="item">
            <span class="key">绑定QQ</span>
            <span class="value">{{ userInfo.QQ }}</span>
            <button style="background: #FF5C23">去绑定</button>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <span class="key">注册时间</span>
            <span class="value">{{ userInfo.registerTime }}</span>
          </div>
          <div class="item">
            <span class="key">绑定微信</span>
            <span class="value">{{ userInfo.wechat }}</span>
            <button style="background: #FF5C23">去绑定</button>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <span class="key">实名认证</span>
            <span class="value auth">{{ userInfo.auth }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title">平台月卡</div>
    </div>
    <div class="section">
      <div class="title">VIP等级</div>
      <div class="table">
        <div class="row">
          <div class="item">
            <span class="key">当前等级</span>
            <span class="value">{{ userInfo.level }}</span>
          </div>
          <div class="item">
            <span class="key">成长值</span>
            <span class="value">{{ userInfo.experience }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 35px 21px 15px 13px;

  > .title {
    font-size: 20px;
    color: #636363;
    display: inline-block;
    border-bottom: 4px solid #FF7227;
  }

  .section {
    margin-top: 24px;

    .title {
      background: #F9F9F9;
      height: 43px;
      font-size: 18px;
      color: #636363;
      line-height: 43px;
      padding-left: 21px;
    }

    .table {
      padding-left: 14px;
      padding-right: 42px;

      .row {
        display: flex;

        .item {
          flex: 1;
          margin-top: 31px;
          font-size: 18px;
          color: #636363;
          display: flex;
          align-items: center;
          position: relative;

          .key {
            width: 72px;
          }

          .value {
            margin-left: 53px;
          }

          .value.auth {
            color: #FFFFFF;
            border-radius: 4px;
            background: #FF5C23;
            font-size: 16px;
            padding: 5px 10px;
          }

          button {
            right: 0;
            position: absolute;
            border: none;
            color: #FFFFFF;
            border-radius: 4px;
            font-size: 16px;
            padding: 5px 10px;
          }
        }
      }
    }
  }
}
</style>

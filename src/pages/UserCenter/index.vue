<script>
import { defineComponent } from 'vue';
import infoIcon from './assets/info.png';
import infoActiveIcon from './assets/info-active.png';
import exchangeIcon from './assets/exchange.png';
import exchangeActiveIcon from './assets/exchange-active.png';
import inviteIcon from './assets/invite.png';
import inviteActiveIcon from './assets/invite-active.png';
import UserInfo from '@/pages/UserCenter/components/UserInfo.vue';
import MyExchange from '@/pages/UserCenter/components/MyExchange.vue';

export default defineComponent({
  name: 'index',
  components: { MyExchange, UserInfo },
  data () {
    return {
      userInfo: {
        name: 'XX玩家',
        balance: 100,
        type: '代理',
        experience: '0/1000'
      },
      functionList: {
        index: 0,
        list: [
          {
            name: '我的信息',
            icon: infoIcon,
            activeIcon: infoActiveIcon
          },
          {
            name: '我的兑换',
            icon: exchangeIcon,
            activeIcon: exchangeActiveIcon
          },
          {
            name: '邀请赚币',
            icon: inviteIcon,
            activeIcon: inviteActiveIcon
          }
        ]
      }

    };
  }
});
</script>

<template>
  <div class="page">
    <div class="panel">
      <div class="left">
        <div class="userinfo">
          <img src="./assets/head.png" class="head">
          <div class="info">
            <div class="name">{{ userInfo.name }}</div>
            <div class="balance">
              <span>平台币：</span>
              <span>{{ userInfo.balance }}</span>
            </div>
          </div>
          <div class="exit">退出</div>
        </div>
        <div class="userinfo-2">
          <div class="progress"></div>
          <div class="experience-info">
            <div class="vip">
              <img src="./assets/diamond.png">
              <img src="./assets/vip-icon.png">
            </div>
            <div class="type">
              <img src="@/assets/images/user.png">
              <span>{{ userInfo.type }}</span>
            </div>
            <div class="number">
              {{ userInfo.experience }}
            </div>
          </div>
        </div>
        <div class="checkin-btn">
          <button>签到</button>
        </div>
        <!--侧边栏选项卡-->
        <div class="function-list">
          <div class="item"
               v-for="(item,index) in functionList.list"
               :class="[index===functionList.index?'active':'']"
               :key="index"
               @click="functionList.index=index">
            <img :src="index===functionList.index?item.activeIcon:item.icon">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <UserInfo v-if="functionList.index===0"/>
        <MyExchange v-if="functionList.index===1"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index";
</style>

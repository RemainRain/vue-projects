<script>
import { defineComponent } from 'vue';
import couponIcon from '@/assets/images/coupon.png';
import userIcon from '@/assets/images/user.png';
import crownIcon from '@/assets/images/crown.png';
import userGroupIcon from '@/assets/images/user-group.png';
import serverIcon from '@/assets/images/server.png';

export default defineComponent({
  name: 'RightBar',
  data () {
    return {
      linkList: [
        {
          name: '冲榜领券',
          icon: couponIcon,
          link: 'https://baidu.com'
        },
        {
          name: '会员代表',
          icon: userIcon,
          link: 'https://baidu.com'
        },
        {
          name: '游戏冠名',
          icon: crownIcon,
          link: 'https://baidu.com'
        },
        {
          name: '公众号',
          icon: userGroupIcon,
          link: 'https://baidu.com'
        },
        {
          name: '在线客服',
          icon: serverIcon,
          link: 'https://baidu.com'
        }
      ]
    };
  },
  methods: {
    // 点击滚动至顶部
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
});
</script>

<template>
  <div class="fixed-tools">
    <a class="item"
       target="_blank"
       v-for="(item,index) in linkList"
       :href="item.link"
       :key="index">
      <img :src="item.icon">
      <span>{{ item.name}}</span>
    </a>
    <a class="item" href="#" @click="scrollToTop">
      <img src="@/assets/images/up.png" alt="top">
    </a>
  </div>
</template>

<style scoped lang="scss">
.fixed-tools {
  position: fixed;
  top: 55%;
  transform: translateY(-50%);
  right: 10px;
  width: 74px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #d1d1d1;
  border-radius: 2px;
  z-index: 9999;
  padding-top: 20px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #767676;
    text-decoration:none;
    margin-bottom: 33px;

    img {
      width: 26px;
    }
  }

  .item:last-of-type {
    margin-bottom: 20px;
  }
}
</style>

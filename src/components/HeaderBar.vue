<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderBar',
  data () {
    return {
      // 导航列表
      lefTabList: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '游戏中心',
          path: '/game-center'
        },
        {
          name: '用户中心',
          path: '/user-center'
        },
        {
          name: '充值中心',
          path: '/recharge-center'
        },
        {
          name: '新闻中心',
          path: '/news-center'
        },
        {
          name: '开服表',
          path: '/other'
        },
        {
          name: '兑换中心',
          path: '/reward-center'
        }
      ],
      currentPath: null,
      accountInfo: {
        name: 'XX玩家'
      }
    };
  },
  // 监听页面路由变化
  watch: {
    $route () {
      // console.log(this.$route);
      this.currentPath = this.$route.path;
      console.log(this.currentPath);
    }
  },
  methods: {
    // 跳转
    toPage (path) {
      this.currentPath = path;
      console.log(this.currentPath);
      this.$router.push(path);
    }
  }
})
;
</script>

<template>
  <div id="bar">
    <div class="tabs">
      <div class="left">
        <img class="logo" src="../assets/images/logo.png">
        <div v-for="(item,index) in lefTabList"
             :key="index"
             class="tab"
             :class="[currentPath===item.path?'active': '' ]"
             @click="toPage(item.path)">
          {{ item.name }}
        </div>
      </div>
      <div class="right">
        <div class="search">
          <input placeholder="搜索网页游戏"/>
          <img src="../assets/images/search.png">
        </div>
        <div class="account">
          <span>账号：{{ accountInfo.name }}</span>
          <span class="exit">&nbsp;| 退出</span>
        </div>
        <div class="download">
          <img src="@/assets/images/download.png">
          <span>下载</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
#bar {
  background: #fff;
  height: 76px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.tabs {
  width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 148px;
      height: 50px;
      margin-right: 43px;
    }

    .tab {
      padding: 7px 10px 5px;
      margin-right: 10px;
    }

    .active {
      color: #fff;
      background: #FF8F2F;
      border-radius: 10px;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .search {
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 103px;

      input {
        padding: 10px 13px;
        border-radius: 12px;
        border: none;
        background: #ECECEC;
        padding-right: 33px;
      }

      input::placeholder {
        font-size: 14px;
        color: #B0B0B0;
      }

      img {
        position: absolute;
        width: 16px;
        right: 15px;
      }
    }

    .account {
      color: #777777;
    }

    .download {
      color: #777777;
      margin-left: 18px;

      img {
        width: 15px;
        margin-right: 2px;
      }
    }
  }

}

</style>

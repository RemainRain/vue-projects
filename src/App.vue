<script>
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import MyFooter from '@/components/MyFooter.vue';
import RightBar from '@/components/RightBar.vue';

export default defineComponent({
  name: 'index',
  components: { RightBar, HeaderBar, MyFooter }
});
</script>
<template>
  <!--头部导航栏-->
  <HeaderBar/>
  <div class="padding"></div>
  <!--路由相关页面-->
  <router-view/>
  <!--底部导航栏-->
  <MyFooter/>
  <!--右侧导航栏-->
  <RightBar/>
</template>

<style lang="scss">
// 公共样式
body {
  //font-family: "Microsoft YaHei",serif;
  background: #f4f4f4;
  margin: 0;
  //overflow-x: hidden;
}

html {
  height: 100%;
}

html, body {
  scroll-behavior: smooth; /* 使用 CSS 滚动行为平滑滚动 */
  transition-duration: 0.5s; /* 设置过渡持续时间为 0.5 秒 */
}

* {
  box-sizing: border-box;
}

.page {
  max-width: 1360px;
  min-width: 1360px;
  margin: 0 auto;
  //overflow-x: auto;
  //border: 1px;
  //padding: 0 15px;
}

.padding {
  height: 76px;
  width: 100%;
}

.layout_3-10 {
  display: flex;
  margin-top: 20px;

  .left {
    flex: 3;
  }

  .right {
    flex: 10;
    margin-left: 35px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 16px;

  .item {
    border-radius: 4px;
    background: #DBDBDB;
    margin-right: 11px;
    padding: 7px 20px;
    color: #5D5B5A;
  }

  .active {
    color: #fff;
    background: #FF8400;
  }
}
</style>

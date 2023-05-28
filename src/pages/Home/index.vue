<script>
import { defineComponent } from 'vue';
import LoginForm from '@/pages/Home/components/LoginForm.vue';
import ProductList from '@/pages/Home/components/ProductList.vue';
import ServiceList from '@/pages/Home/components/ServiceList.vue';
import RecommendGame from '@/pages/Home/components/RecommendGame.vue';
import PopularGifts from '@/pages/Home/components/PopularGifts.vue';
import PopularGames from '@/pages/Home/components/PopularGames.vue';
import ServiceChannels from '@/pages/Home/components/ServiceChannels.vue';
import RecommendNewGames from '@/pages/Home/components/RecommendNewGames.vue';
export default defineComponent({
  name: 'index',
  components: {
    LoginForm,
    ProductList,
    ServiceList,
    RecommendGame,
    PopularGifts,
    PopularGames,
    ServiceChannels,
    RecommendNewGames
  }
});
</script>

<template>
  <div class="bg">
    <div></div>
  </div>
  <div class="page">
    <div class="login-wrapper">
      <LoginForm/>
    </div>
    <div class="products-wrapper">
      <ProductList/>
    </div>
    <div class="contents">
      <div class="layout_3-10">
        <div class="left">
          <ServiceList/>
        </div>
        <div class="right">
          <RecommendGame/>
        </div>
      </div>
      <div class="layout_3-10">
        <div class="left">
          <PopularGifts/>
        </div>
        <div class="right">
          <PopularGames/>
        </div>
      </div>
      <div class="layout_3-10">
        <div class="left">
          <ServiceChannels/>
        </div>
        <div class="right">
          <RecommendNewGames/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.bg {
  height: 460px;
  width: 100%;
  position: absolute;
  top: 76px;
  //top: 0;
  left: 0;
  right: 0;
  //width: 100%; /* 设置容器宽度为100% */
  overflow: hidden; /* 隐藏超出容器范围的内容 */

  div {
    height: 460px;
    background-size: cover; /* 调整背景图像的大小以填充容器 */
    /* 将背景图像居中 */
    background: url("./assets/bg.png") no-repeat center;
  }
}

.page {
  position: relative;

  .login-wrapper {
    z-index: 10;
    position: absolute;
    top: 50px;
    //margin-left: 15px;
  }

  .products-wrapper {
    z-index: 10;
    position: absolute;
    right: 0;
    top: 0;
  }

  .contents {
    padding-top: 460px;

  }

  .layout_3-10:last-of-type {
    margin-bottom: 137px;
  }
}
</style>

<script>
import { defineComponent } from 'vue';
import Carousel from '@/components/Carousel.vue';
import GameNews from '@/pages/GameCenter/components/GameNews.vue';
import RecommendGames from '@/pages/GameCenter/components/RecommendGames.vue';
import GameList from '@/pages/GameCenter/components/GameList.vue';

export default defineComponent({
  name: 'index',
  components: { GameList, RecommendGames, GameNews, Carousel }
});
</script>

<template>
  <div class="page">
    <div class="top">
      <div class="carousel-wrapper">
        <Carousel/>
      </div>
      <div class="news-wrapper">
        <GameNews/>
      </div>
    </div>
    <div class="layout_3-10">
      <div class="left">
        <RecommendGames/>
      </div>
      <div class="right">
        <GameList/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;

  .carousel-wrapper {
    width: 995px;
    height: 447px;
  }

  .news-wrapper {
    padding-top: 8px;
  }
}

.layout_3-10 {
  margin-bottom: 72px;
}
</style>

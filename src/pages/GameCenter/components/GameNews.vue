<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';

export default defineComponent({
  name: 'GameNews',
  components: { MyTitle },
  data () {
    return {
      newsList: [
        {
          title: '【九天传】6月10日公告',
          time: '05-10'
        },
        {
          title: '【九天传】6月10日公告',
          time: '05-10'
        },
        {
          title: '【九天传】6月10日公告',
          time: '05-10'
        },
        {
          title: '【九天传】6月10日公告',
          time: '05-10'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>游戏最新资讯</MyTitle>
    <div class="content">
      <div class="list">
        <div class="item" v-for="(item,index) in newsList" :key="index">
          <div class="name">{{ item.title }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .content {
    background: #fff;
    height: 390px;
    width: 324px;
    padding: 0 15px;

    .list {
      margin-top: 15px;

      .item {
        display: flex;
        height: 30px;
        padding: 14px 0;
        justify-content: space-between;
        font-size: 14px;

        .name {
          color: #4B4B4B;

        }

        .name::before {
          content: "\25C7";
          font-size: 10px;
          color: #A7A7A7;
          margin-right: 5px;
        }

        .time {
          text-align: right;
          color: #A7A7A7;
        }
      }
    }
  }
}
</style>

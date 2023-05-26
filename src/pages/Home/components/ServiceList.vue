<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';

export default defineComponent({
  name: 'ServiceList',
  components: { MyTitle },
  data () {
    return {
      serviceList: [
        {
          name: '九天传',
          index: 178,
          time: '05-10 14:00'
        },
        {
          name: '九天传',
          index: 178,
          time: '05-10 14:00'
        },
        {
          name: '九天传',
          index: 178,
          time: '05-10 14:00'
        }
      ],
      activeTab: 0
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>开服列表</MyTitle>
    <div class="content">
      <div class="tab">
        <div :class="[activeTab===0?'active':'']" @click="activeTab=0">已开新服</div>
        <div :class="[activeTab===1?'active':'']" @click="activeTab=1">新服预告</div>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in serviceList" :key="index">
          <div class="name">{{ item.name }}</div>
          <div class="index">{{ item.index }}区</div>
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
    height: 664px;
    padding: 0 15px;

    .tab {
      display: flex;
      font-size: 18px;
      color: #4B4B4B;

      div {
        width: 50%;
        text-align: center;
        padding: 15px 0;
      }

      .active {
        border-bottom: 2px solid #FF7240;
      }
    }

    .list {
      margin-top: 15px;
      .item {
        display: flex;
        height: 30px;
        margin: 5px 0;

        .name {
          flex: 5;
        }

        .name::before {
          content: "\25C7";
          font-size: 10px;
          color: #A7A7A7;
          margin-right: 5px;
        }

        .index {
          flex: 2;
        }

        .time {
          flex: 4;
          text-align: right;
          color: #A7A7A7;
        }
      }
    }
  }
}
</style>

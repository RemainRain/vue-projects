<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';

export default defineComponent({
  name: 'RecommendNewGames',
  components: { MyTitle },
  data () {
    return {
      games: {
        webGames: [
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↑'
          },
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↓'
          }
        ],
        mobileGames: [
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↑'
          },
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↓'
          }
        ],
        H5Games: [
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↑'
          },
          {
            name: '上古传说',
            type: '角色扮演',
            link: 'https://baidu.com',
            tend: '↓'
          }
        ]
      }
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>新游戏推荐</MyTitle>
    <div class="content">
      <div class="box">
        <div class="title">网页游戏</div>
        <div class="list">
          <div class="item" v-for="(item, index) in games.webGames" :key="index">
            <div class="index">{{ index }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="type">{{ item.type }}</div>
            <div :class="[item.tend==='↑'?'up':'down']">{{ item.tend }}</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">手机游戏</div>
        <div class="list">
          <div class="item" v-for="(item, index) in games.webGames" :key="index">
            <div class="index">{{ index }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="type">{{ item.type }}</div>
            <div :class="[item.tend==='↑'?'up':'down']">{{ item.tend }}</div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="title">H5游戏</div>
        <div class="list">
          <div class="item" v-for="(item, index) in games.webGames" :key="index">
            <div class="index">{{ index }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="type">{{ item.type }}</div>
            <div :class="[item.tend==='↑'?'up':'down']">{{ item.tend }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box {
    width: 323px;
    height: 292px;
    background: #fff;

    .title {
      line-height: 35px;
      font-size: 15px;
      color: #fff;
      font-weight: normal;
      background: #ff823c;
      height: 35px;
      padding-left: 16px;
    }

    .list {
      .item {
        position: relative;
        padding: 10px 10px;
        line-height: 20px;
        border-bottom: 1px dashed #EAEAEA;
        display: flex;
        align-items: center;

        .index {
          color: white;
          background: #e74b57;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          margin-right: 10px;
          font-size: 12px;
        }

        .name {
          font-size: 15px;
          float: left;
          max-width: calc(100% - 118px);
          font-size: 15px;
          font-weight: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .type {
          position: absolute;
          right: 40px;
          color: #999;
          font-size: 12px;
        }

        .up, .down {
          position: absolute;
          right: 15px;
          font-weight: 900;
        }

        .up {
          color: red;
        }

        .down {
          color: green;
        }
      }
    }
  }
}
</style>

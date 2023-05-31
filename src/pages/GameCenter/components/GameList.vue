<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';
import coverImg from '../../Home/assets/cover2.png';

export default defineComponent({
  name: 'GameList',
  components: { MyTitle },
  data () {
    return {
      gameList: [
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        },
        {
          img: coverImg,
          name: '上古传说',
          type: '角色扮演',
          link: 'https://baidu.com'
        }
      ],
      choices: {
        deviceType: {
          active: 0,
          list: ['网页游戏', '手机游戏', 'H5游戏']
        },
        gameType: {
          active: 0,
          list: ['全部', '角色扮演', '战略战策', '武侠玄幻', '即使传奇', '休闲益智', '魔幻仙侠']
        },
        gameTheme: {
          active: 0,
          list: ['全部', 'PK', ' 传奇', '仙侠', '武侠']
        },
        letterLookup: {
          active: 0,
          list: ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ']
        }
      },
      pagination: {
        index: 0,
        list: [1, 2, 3, 4]
      }
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>游戏列表</MyTitle>
    <div class="content">
      <div class="search-ways">
        <div class="device-type">
          <div class="item"
               v-for="(item,index) in choices.deviceType.list"
               :key="index"
               :class="[choices.deviceType.active===index?'active':'']"
               @click="choices.deviceType.active=index">
            {{ item }}
          </div>
        </div>
        <div class="game-type">
          <div class="title">游戏类型</div>
          <div class="item"
               v-for="(item,index) in choices.gameType.list"
               :key="index"
               :class="[choices.gameType.active===index?'active':'']"
               @click="choices.gameType.active=index">
            {{ item }}
          </div>
        </div>
        <div class="game-theme">
          <div class="title">游戏题材</div>
          <div class="item"
               v-for="(item,index) in choices.gameTheme.list"
               :key="index"
               :class="[choices.gameTheme.active===index?'active':'']"
               @click="choices.gameTheme.active=index">
            {{ item }}
          </div>
        </div>
        <div class="letter-lookup">
          <div class="title">字母查找</div>
          <div class="item"
               v-for="(item,index) in choices.letterLookup.list"
               :key="index"
               :class="[choices.letterLookup.active===index?'active':'']"
               @click="choices.letterLookup.active=index">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="result">
        <div class="game" v-for="(game,index) in gameList" :key="index">
          <div class="cover">
            <img :src="game.img">
          </div>
          <div class="top">
            <span class="name">{{ game.name }}</span>
            <span class="entry">进入游戏</span>
          </div>
          <div class="bottom">
            <div class="type">
              <img src="../../../assets/images/pc.png">
              <span>{{ game.type }}</span>
            </div>
            <a class="link" :href="game.link">官网｜礼包</a>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="item">共{{ pagination.list.length }}页</div>
        <div class="item">上一页</div>
        <div class="item"
             v-for="(item, index) in pagination.list"
             :class="[index===pagination.index?'active':'']"
             :key="index"
             @click="pagination.index=index">
          {{ item }}
        </div>
        <div class="item">下一页</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  background: #fff;
  height: 1304px;

  .search-ways {
    font-size: 20px;
    padding: 14px;

    .active {
      background: #FF8400;
      border-radius: 4px;
      color: #fff !important;

    }

    .device-type {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      .item {
        padding: 7px 8px;
        margin-right: 70px;
      }
    }

    .game-type, .game-theme, .letter-lookup {
      font-size: 18px;
      align-items: center;
      display: flex;
      margin-bottom: 24px;

      div {
        margin-right: 26px;
        padding: 7px 8px;
      }

      .item {
        color: #636363;
      }
    }
  }

  .result {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .game {
      width: 240px;
      //height: 227px;
      display: inline-block;
      //margin-right: 5px;
      margin-bottom: 22px;
      background: #fff;

      img {
        width: 100%;
        border-radius: 4px;
      }

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 19px 0px 22px;

        .name {
          font-weight: 700;
          font-size: 18px;
        }

        .entry {
          background: #FF8400;
          border-radius: 4px;
          color: #fff;
          padding: 3px 10px;
          font-size: 14px;
        }
      }

      .bottom {
        padding: 0px 19px 5px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8C8C8C;
        font-size: 12px;

        .type {
          display: inline-flex;
          align-items: center;

          img {
            width: 15px;
            margin-right: 7px;
          }
        }

        .link {
          text-decoration: none;
          color: #8C8C8C;
          padding-right: 7px;
        }
      }
    }
  }

}
</style>

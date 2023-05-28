<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';
import coverImg from '../assets/cover2.png';

export default defineComponent({
  name: 'PopularGames',
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
        }
      ]
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>热门游戏</MyTitle>
    <div class="content">
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
            <img src="../assets/pc.png">
            <span>{{ game.type }}</span>
          </div>
          <a class="link" :href="game.link">官网｜礼包</a>
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

  .game {
    width: 240px;
    //height: 227px;
    display: inline-block;
    //margin-right: 5px;
    margin-bottom: 22px;
    background: #fff;

    img {
      width: 100%;
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
</style>

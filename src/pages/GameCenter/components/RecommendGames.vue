<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';
import icon from '../../Home/assets/icon.png';

export default defineComponent({
  name: 'RecommendGames',
  components: { MyTitle },
  data () {
    return {
      giftList: [
        {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }, {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }, {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }, {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }, {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }, {
          name: '上古传说',
          type: '角色扮演',
          img: icon
        }
      ],
      activeTab: 0
    };
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>游戏推荐</MyTitle>
    <div class="content">
      <div class="list">
        <div class="item" v-for="(item,index) in giftList" :key="index">
          <img :src="item.img"/>
          <div class="right">
            <div class="top">
              <div class="name">{{ item.name }}</div>
              <div class="get-btn">点击即玩</div>
            </div>
            <div class="type">{{ item.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .content {
    background: #fff;
    height: 1304px;
    padding: 0 15px;

    .list {
      margin-top: 15px;
      overflow: hidden;

      .item {
        display: flex;
        //padding: 13px 0;
        //margin: 5px 0;
        margin-top: 13px;
        //height: 50px;
        align-items: center;
        border-bottom: 2px dashed #EFEFEF;
        padding-bottom: 12px;

        img {
          width: 50px;
          height: 50px;
        }

        .right {
          .top {
            display: flex;
            justify-content: space-between;

            .name {
              font-weight: 700;
              font-size: 18px;
            }

            .get-btn {
              background: #FF8400;
              border-radius: 4px;
              color: #fff;
              padding: 3px 10px;
              font-size: 14px;
            }
          }

          .type {
            font-size: 12px;
            color: #656565;
          }
        }
      }
    }
  }
}
</style>

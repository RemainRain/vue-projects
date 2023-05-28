<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';
import icon from '../assets/icon.png';

export default defineComponent({
  name: 'PopularGifts',
  components: { MyTitle },
  data () {
    return {
      giftList: [
        {
          name: '上古传说',
          remain: '50%',
          img: icon
        }, {
          name: '上古传说',
          remain: '50%',
          img: icon
        }, {
          name: '上古传说',
          remain: '50%',
          img: icon
        }, {
          name: '上古传说',
          remain: '50%',
          img: icon
        }, {
          name: '上古传说',
          remain: '50%',
          img: icon
        }, {
          name: '上古传说',
          remain: '50%',
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
    <MyTitle>热门礼包</MyTitle>
    <div class="content">
      <div class="list">
        <div class="item" v-for="(item,index) in giftList" :key="index">
          <img :src="item.img"/>
          <div class="right">
            <div class="top">
              <div class="name">{{ item.name }}</div>
              <div class="get-btn">点击领取</div>
            </div>
            <div class="remain">剩余<span class="count">{{ item.remain }}</span></div>
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
    height: 431px;
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
      overflow: hidden;

      .item {
        display: flex;
        //padding: 13px 0;
        //margin: 5px 0;
        margin-top: 13px;
        //height: 50px;
        align-items: center;

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

          .remain {
            font-size: 12px;

            .count {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>

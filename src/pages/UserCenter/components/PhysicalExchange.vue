<script>
import { defineComponent } from 'vue';
import goodsIcon from '../assets/goods.png';

export default defineComponent({
  name: 'PhysicalExchange',
  data () {
    return {
      balance: 100,
      usedNum: 10,
      records: [
        {
          name: '肩角衣架家用无痕防滑撑子起包',
          orderID: '1234567890',
          time: '5月1日',
          num: 5,
          color: '灰色',
          image: goodsIcon
        },
        {
          name: '肩角衣架家用无痕防滑撑子起包',
          orderID: '1234567890',
          time: '5月1日',
          num: 5,
          color: '灰色',
          image: goodsIcon
        },
        {
          name: '肩角衣架家用无痕防滑撑子起包',
          orderID: '1234567890',
          time: '5月1日',
          num: 5,
          color: '灰色',
          image: goodsIcon
        },
        {
          name: '肩角衣架家用无痕防滑撑子起包',
          orderID: '1234567890',
          time: '5月1日',
          num: 5,
          color: '灰色',
          image: goodsIcon
        }
      ],
      pagination: {
        index: 0,
        list: [1, 2, 3, 4]
      }
    };
  }
});
</script>

<template>
  <div class="info">
    <div class="item">
      <img src="../assets/shoppin-cart.png">
      <span>已兑换实物：</span>
      <span>{{ usedNum }}</span>
    </div>
    <div class="item">
      <img src="../assets/coin.png">
      <span>剩余兑换币：</span>
      <span>{{ balance }}</span>
      <div class="exchange-btn">去兑换</div>
    </div>

  </div>
  <div class="records">
    <div class="title">兑换记录：</div>
    <div class="list">
      <div class="item" v-for="(item,index) in records" :key="index">
        <img :src="item.image">
        <div class="desc">
          <div class="name">{{ item.name }}</div>
          <div class="other">
            <div class="row">
              <div class="info2">
                <span>颜色分类：</span>
                <span>{{ item.color }}</span>
              </div>
              <div class="info2">
                <span>兑换金额：</span>
                <span style="color: #FF0000">{{ item.num }}币</span>
              </div>
            </div>
            <div class="row">
              <div class="info2">
                <span>订单号：</span>
                <span>{{ item.orderID }}</span>
              </div>
              <div class="info2">
                <span>兑换日期：</span>
                <span>{{ item.time }}</span>
                <span>{{ item.time }}</span>
                <img src="../assets/car.png"/>
                <span>查看物流</span>
              </div>
            </div>
          </div>
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
</template>

<style scoped lang="scss">

.info {
  background: #F9F9F9;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .item {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 350px;

    img {
      width: 22px;
    }

    span:first-of-type {
      color: #636363;
      margin-left: 7px;
    }

    span:last-of-type {
      color: #FF8F2F;
    }
  }

  .exchange-btn, .share-btn {
    font-size: 18px;
    color: #fff;
    padding: 5px 19px;
    border-radius: 10px;
  }

  .exchange-btn {
    background: #FF8F2F;
    margin-left: 32px;
  }
}

.records {

  margin-top: 24px;
  padding: 16px 21px;

  .list {
    margin-top: 20px;

    .item {
      margin-bottom: 25px;
      background: #F9F9F9;
      display: flex;
      align-items: center;
      padding-left: 24px;
      height: 110px;

      > img {
        height: 100px;
      }

      .desc {
        margin-left: 10px;
        flex: 1;

        .name {
          font-size: 16px;
          color: #636363;
        }

        .other {
          color: #8C8C8C;
          font-size: 14px;
          margin-top: 14px;

          .row {
            display: flex;
            align-items: center;

            .info2 {
              flex: 1;

              img {
                width: 15px;
                margin-left: 17px;
                margin-right: 3px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

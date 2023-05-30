<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PKCoinExchange',
  data () {
    return {
      balance: 100,
      records: [
        { time: '2023年5月1日', num: 5 },
        { time: '2023年5月1日', num: 5 },
        { time: '2023年5月1日', num: 5 },
        { time: '2023年5月1日', num: 5 }
      ]
    };
  }
});
</script>

<template>
  <div class="info">
    <img src="../assets/coin.png">
    <div class="balance">
      <span>PK币余额：</span>
      <span>{{ balance }}</span>
    </div>
    <div class="exchange-btn">去兑换</div>
    <div class="share-btn">分享赚PK币</div>
  </div>
  <div class="records">
    <div class="title">兑换记录：</div>
    <div class="list">
      <div class="item" v-for="(item,index) in records" :key="index">
        <span>{{ item.time }}</span>
        <span>兑换金额：{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.info {
  background: #F9F9F9;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 37px;
  }

  .balance {
    margin-left: 8px;
    font-size: 20px;

    span:first-of-type {
      color: #636363;

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

  .share-btn {
    background: #249BFF;
    margin-left: 32px;
  }
}

.records {
  background: #F9F9F9;
  margin-top: 24px;
  padding: 16px 21px;
  font-size: 16px;
  color: #636363;

  .list {
    margin-top: 20px;

    .item {
      margin-bottom: 11px;

      span:last-of-type {
        margin-left: 122px;
      }
    }
  }
}
</style>

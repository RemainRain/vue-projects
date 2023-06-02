<script>
import { defineComponent } from 'vue';
import alipayIcon from './assets/alipay.png';
import weixinPayIcon from './assets/wexinpay.png';

export default defineComponent({
  name: 'index',
  data () {
    return {
      amountList: {
        index: 0,
        list: [
          10, 20, 50, 100
        ]
      },
      discountList: {
        index: 0,
        list: [
          {
            desc: '九折',
            discount: 0.9
          },
          {
            desc: '八折',
            discount: 0.8
          },
          {
            desc: '七折',
            discount: 0.7
          }
        ]
      },
      payWayList: {
        index: 0,
        list: [
          {
            icon: alipayIcon
          },
          {
            icon: weixinPayIcon
          }
        ]
      },
      form: {
        discount: 0.9,
        amount: 10
      }
    };
  },
  methods: {
    setAmount (index) {
      this.amountList.index = index;
      this.form.amount = this.amountList.list[index];
    }
  }
});
</script>

<template>
  <div class="page">
    <div class="panel">
      <div class="step">
        <div class="title">
          <span>1</span>
          <span>请选择游戏区服、充值账号</span>
        </div>
        <div class="selections">
          <select>
            <option>选择充值游戏</option>
          </select>
          <select>
            <option>请选择服务器</option>
          </select>
        </div>
        <div class="account-info">
          <span>当前账号：XX大玩家</span>
          <span>为朋友充值</span>
        </div>
      </div>
      <div class="step">
        <div class="title">
          <span>2</span>
          <span>请选择充值金额</span>
        </div>
        <div class="amount-list">
          <div class="item"
               :class="[index===amountList.index?'active':'']"
               @click="setAmount(index)"
               v-for="(item,index) in amountList.list" :key="item">
            {{ item }}
          </div>
        </div>
        <div class="custom-amount">
          <input placeholder="其他金额，最低1元"/>
          <span>您将获得<span style="color: #F9415C">0</span>（兑换比例1:0）</span>
        </div>
      </div>
      <div class="step">
        <div class="title">
          <span>3</span>
          <span>请选择卡券</span>
        </div>
        <div class="selections">
          <select v-model="form.discount">
            <option v-for="(item, index) in discountList.list"
                    :value="item.discount"
                    :key="index">
              {{ item.desc }}
            </option>
          </select>
        </div>
        <div class="calc">
          <span>折后支付：</span>
          <span style="color: #D81E06">¥</span>
          <span>{{ (form.amount * form.discount).toFixed(2) }}</span>
        </div>
      </div>
      <div class="step">
        <div class="title">
          <span>3</span>
          <span>请选择支付方式</span>
        </div>
        <div class="pay-ways">
          <div v-for="(item,index) in payWayList.list"
               class="way"
               @click="payWayList.index=index"
               :class="[index===payWayList.index?'active':'']"
               :key="index">
            <img :src="item.icon">
          </div>
        </div>
        <div class="recharge-btn">立即充值</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "index";
</style>

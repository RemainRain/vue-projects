<script>
import { defineComponent } from 'vue';
import PKCoinExchange from '@/pages/UserCenter/components/PKCoinExchange.vue';
import PhysicalExchange from '@/pages/UserCenter/components/PhysicalExchange.vue';

export default defineComponent({
  name: 'MyExchange',
  components: { PhysicalExchange, PKCoinExchange },
  data () {
    return {
      tabIndex: 0

    };
  }
});
</script>

<template>
  <div class="container">
    <div class="title">商场兑换</div>
    <div class="section-1">
      <span>规则说明：</span>
    </div>
    <div class="section-2">
      <div class="tab">
        <div :class="[tabIndex===0?'active':'']" @click="tabIndex=0">PK币兑换</div>
        <div :class="[tabIndex===1?'active':'']" @click="tabIndex=1">实物兑换</div>
      </div>
      <PKCoinExchange v-if="tabIndex===0"/>
      <PhysicalExchange v-else/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 35px 21px 15px 13px;

  > .title {
    font-size: 20px;
    color: #636363;
    display: inline-block;
    border-bottom: 4px solid #FF7227;
  }

  .section-1 {
    margin-top: 24px;
    background: #F9F9F9;
    height: 100px;
    padding: 16px 21px;
    font-size: 16px;
    color: #636363;
  }

  .section-2 {
    margin-top: 48px;

    .tab {
      display: flex;
      justify-content: space-around;

      > div {
        width: 200px;
        text-align: center;
      }

      .active {
        border-bottom: 6px solid #FF8F2F;
      }
    }

  }
}
</style>

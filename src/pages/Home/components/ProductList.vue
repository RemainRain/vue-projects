<script>
import { defineComponent } from 'vue';
import logo from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'ProductList',
  data () {
    return {
      productList: [
        {
          logo,
          name: '热血战歌',
          type: '角色扮演',
          ratio: '1:100'
        },
        {
          logo,
          name: '热血战歌',
          type: '角色扮演',
          ratio: '1:100'
        },
        {
          logo,
          name: '热血战歌',
          type: '角色扮演',
          ratio: '1:100'
        },
        {
          logo,
          name: '热血战歌',
          type: '角色扮演',
          ratio: '1:100'
        },
        {
          logo,
          name: '热血战歌',
          type: '角色扮演',
          ratio: '1:100'
        }
      ]
    };
  }
});
</script>

<template>
  <div class="list">
    <div class="product" v-for="(item,index) in productList" :key="index">
      <img :src="item.logo">
      <div class="right">
        <div class="top">
          <div class="name">{{ item.name }}</div>
          <div class="type">{{ item.type }}</div>
        </div>
        <div class="bottom">
          <span>游戏比例：</span>
          <span class="value">{{ item.ratio }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  background: rgba(255, 255, 255, 0.7);
}

.product {
  display: flex;
  padding: 15px 10px;
  height: 92px;
  width: 246px;
  border-bottom: 2px dotted #979695;

  img {
    height: 70px;
    width: 70px;
    border-radius: 12px;
  }

  .right {
    flex: 1;
    margin-left: 5px;
    padding: 10px 0;
  }

  .top {
    display: flex;
    justify-content: space-between;

    .name {
      color: #f1724c;
    }

    .type {
      color: #979695;
      font-size: 14px;
    }
  }

  .bottom {
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #979695;
    .value {
      color: #fee006;
      font-size: 14px;
    }
  }
}

.product:hover {
  background: #ffffff;
}
</style>

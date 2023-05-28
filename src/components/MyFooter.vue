<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyFooter',
  data () {
    return {
      linkList: [
        {
          name: '关于我们',
          link: 'https://baidu.com'
        }, {
          name: '联系我们',
          link: 'https://baidu.com'
        }, {
          name: '商务合作',
          link: 'https://baidu.com'
        }, {
          name: '免责申明',
          link: 'https://baidu.com'
        }, {
          name: '使用协议',
          link: 'https://baidu.com'
        }, {
          name: '招聘信息',
          link: 'https://baidu.com'
        }, {
          name: '防沉迷',
          link: 'https://baidu.com'
        }, {
          name: '网站地图',
          link: 'https://baidu.com'
        }
      ],
      sloganList: [
        '点击查看家长监护工程>',
        '抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活',
        'Copyright©2005-2017 All Rights Reserved 皓辰科技'
      ]
    };
  }
});
</script>

<template>
  <div class="footer">
    <div class="links">
      <a target="_blank"
         :href="item.link"
         class="item"
         v-for="(item, index) in linkList"
         :key="index">
        {{ item.name }}
      </a>
    </div>
    <div class="slogans">
      <div class="item" v-for="(item, index) in sloganList" :key="index">
        {{item}}
      </div>
    </div>
    <img src="@/assets/images/logo2.png">
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #333333;
  text-align: center;
  width: 100%;
  padding-bottom: 70px;

  .links {
    width: 100%;
    //padding: 5px 0px 5px;
    //line-height: 40px;
    padding-top: 20px;

    a {
      text-decoration: none;
      color: #FFFFFF;
      font-size: 16px;
      margin-right: 30px;
    }
  }

  .slogans {
    margin-top: 40px;
    color:  #c7c7c7;
    font-size: 16px;

    .item {
      margin-bottom: 17px;
    }
  }
  img {
    width: 38px;
    height: 36px;
  }
}
</style>

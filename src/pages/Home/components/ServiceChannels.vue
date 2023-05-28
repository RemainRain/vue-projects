<script>
import { defineComponent } from 'vue';
import MyTitle from '@/components/MyTitle.vue';

export default defineComponent({
  name: 'ServiceChannels',
  components: { MyTitle },
  data () {
    return {};
  }
});
</script>

<template>
  <div class="container">
    <MyTitle>服务通道</MyTitle>
    <div class="content">
      <div class="list">
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f1"></i>
            <span>修改密码</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f2"></i>
            <span>找回密码</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f3"></i>
            <span>绑定手机</span>
          </a>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f4"></i>
            <span>绑定邮箱</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f5"></i>
            <span>充值游戏</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f9"></i>
            <span>家长监护</span>
          </a>
        </div>
      </div>
      <div class="list">
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f7"></i>
            <span>防沉迷</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f11"></i>
            <span>账号回收</span>
          </a>
        </div>
        <div class="item">
          <a target="_blank">
            <i class="ico_f ico_f3"></i>
            <span>在线加群</span>
          </a>
        </div>
      </div>
      <div class="fastxt">
        <p>
          <span>联系电话：</span>
          <a href="javascript:void(0);"></a>
        </p>
        <p>
          <span>客服QQ：</span>
          <a href="tencent://message/?uin=370485071">370485071</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  .content {
    background: #fff;
    height: 292px;
    padding: 10px;
    //padding-top: 10px;

    .list {
      //margin-top: 15px;
      overflow: hidden;
      display: flex;

      .item {
        a {
          display: block;
          position: relative;
          float: left;
          margin-left: 3px;
          padding-left: 40px;
          width: 100px;
          height: 45px;
          line-height: 45px;
          color: #8f8f8f;
          -webkit-transition: color .2s ease-out;
          -o-transition: color .2s ease-out;
          transition: color .2s ease-out;
          font-size: 12px;
        }

        a:hover {
          color: #ff823c;

          i.ico_f1 {
            background-position: 0px -26px !important;
          }

          i.ico_f2 {
            background-position: -25px -28px !important;
          }

          i.ico_f3 {
            background-position: -49px -26px !important;
          }

          i.ico_f4 {
            background-position: -75px -26px !important;
          }

          i.ico_f5 {
            background-position: -99px -26px !important;
          }

          i.ico_f9 {
            background-position: -223px -26px !important;
          }

          i.ico_f7 {
            background-position: -150px -26px !important;
          }

          i.ico_f11 {
            background-position: -245px -26px !important;
          }

          i.ico_f10 {
            background-position: -174px -27px !important;
          }
        }
      }
    }

    .fastxt {
      p {
        padding-left: 50px;
        padding-right: 10px;
        line-height: 50px;
        margin-bottom: 10px;
        background: url('@/assets/images/icons2.png') no-repeat #E2E2E2;
      }

      p:nth-child(1) {
        background-position: 9px -250px;
      }

      p:nth-child(2) {
        background-position: 9px 12px;
      }

      a {
        font-size: 15px;
        line-height: 25px;
        cursor: pointer;
        text-decoration: none;
        color: #333;
      }
    }
  }
}

i.ico_f1 {
  background-position: 0px -3px !important;
}

i.ico_f2 {
  background-position: -25px -5px !important;
}

i.ico_f3 {
  background-position: -49px -3px !important;
}

i.ico_f4 {
  background-position: -75px -3px !important;
}

i.ico_f5 {
  background-position: -99px -3px !important;
}

i.ico_f7 {
  background-position: -150px -3px !important;
}

i.ico_f9 {
  background-position: -223px -3px !important;
}

i.ico_f10 {
  background-position: -174px -4px !important;
}

i.ico_f11 {
  background-position: -245px -3px !important;
}

i.ico_f {
  position: absolute;
  margin-top: -10px;
  top: 50%;
  left: 14px;
  width: 20px;
  height: 21px;
  background: url('@/assets/images/icons.png') no-repeat;
}
</style>

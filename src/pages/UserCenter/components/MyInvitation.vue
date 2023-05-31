<script>
import { defineComponent } from 'vue';
import portraitIcon from '../assets/portrait.png';

export default defineComponent({
  name: 'MyInvitation',
  data () {
    return {
      balance: 100,
      invitationInfo: {
        userList: [
          {
            icon: portraitIcon,
            name: '大玩家',
            type: 'vip'
          },
          {
            icon: portraitIcon,
            name: '大玩家',
            type: 'agent'
          },
          {
            icon: portraitIcon,
            name: '大玩家'
          },
          {
            icon: portraitIcon,
            name: '大玩家'
          }
        ],
        recordList: [
          {
            user: 'XXX大玩家',
            time: '2023/5/22',
            amount: 1000
          },
          {
            user: 'XXXX大玩家',
            time: '2023/5/22',
            amount: 1000
          },
          {
            user: 'X大玩家',
            time: '2023/5/22',
            amount: 1000
          },
          {
            user: '大玩家',
            time: '2023/5/22',
            amount: 1000
          }
        ]
      }
    };
  }
});
</script>

<template>
  <div class="container">
    <div class="section">
      <div class="header">
        <div class="title">
          <span>我的PK币：</span>
          <span class="balance">100</span>
          <span class="btn">去兑换</span>
        </div>
        <div class="title">
          收益说明
        </div>
      </div>
      <div class="content">
        <div class="title2">我邀请的好友：</div>
        <div class="user-list">
          <div class="item"
               v-for="(item,index) in invitationInfo.userList"
               :key="index">
            <img class="portrait" :src="item.icon">
            <span>{{ item.name }}</span>
            <img class="type" src="../assets/yellow-diamond.png" v-if="item.type==='vip'"/>
            <img class="type" src="../assets/agent-user.png" v-if="item.type==='agent'"/>
          </div>
          <div class="next-btn"><img src="../assets/next.png"></div>
        </div>
        <div class="record-list">
          <div class="item"
               v-for="(item,index) in invitationInfo.recordList"
               :key="index">
            <span class="time">{{ item.time }}</span>
            <span class="info">好友{{ item.user }}玩游戏充值{{ item.amount }}元</span>
            <span class="btn">+ PK币</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="title">邀请好友一起PK吧</div>
      <div class="content">
        <div class="banner">
          <img src="../assets/banner.png">
          <div class="next-btn"><img src="../assets/next.png"></div>
          <div class="qr-code">二维码</div>
        </div>
        <div class="desc">是兄弟就来一起PK吧！兄弟们，燃起我们的热血，一起砍啊！！！</div>
        <div class="share-btn">分享朋友圈邀请好友</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 35px 21px 15px 13px;

  .section {
    .header {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 20px;
        color: #636363;

        .balance {
          color: #FF7227;
        }

        .btn {
          margin-left: 12px;
          background: #00BAFF;
          color: #FFFFFF;
          border-radius: 4px;
          font-size: 16px;
          //line-height: ;
          padding: 3px 5px;
        }
      }
    }

    .content {
      background: #F9F9F9;
      //height: 301px;
      margin-top: 19px;
      padding: 15px 16px;

      .title2 {
        color: #636363;
        font-size: 16px;
      }

      .user-list {
        margin-top: 13px;
        position: relative;
        border-bottom: solid 2px #DBDBDB;
        padding-bottom: 10px;

        .item {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 15px;

          .portrait {
            width: 50px;
            height: 50px;
          }

          span {
            font-size: 12px;
            color: #797979;
            margin-top: 7px;
          }

          .type {
            height: 11px;
            margin-top: 3px;
          }
        }

        .next-btn {
          position: absolute;
          right: 34px;
          top: 17px;

          img {
            width: 13px;
          }
        }
      }

      .record-list {
        .item {
          padding-left: 240px;
          padding-top: 13px;
          font-size: 14px;
          display: flex;
          align-items: center;

          .time {
            color: #878787;
            margin-right: 61px;
          }

          .info {
            margin-right: 76px;
            width: 250px;
            color: #636363;
          }

          .btn {
            font-size: 12px;
            color: #FFFFFF;
            background: #FF0101;
            border-radius: 8.5px;
            padding: 4px 6px;
          }
        }
      }
    }
  }

  .section-2 {
    margin-top: 32px;

    .title {
      color: #636363;
      font-size: 20px;
    }

    .content {
      margin-top: 12px;

      .banner {
        position: relative;
        display: flex;
        align-items: center;

        > img {
          width: 918px;
        }

        .next-btn {
          margin-left: 17px;

          img {
            height: 53px;
            width: 30px;
          }
        }

        .qr-code {
          position: absolute;
          bottom: 28px;
          right: 100px;
          background: #878787;
          width: 95px;
          height: 95px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
        }
      }

      .desc {
        height: 51px;
        width: 918px;
        background: #E2E1E1;
        color: #5D5B5A;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .share-btn {
        width: 200px;
        height: 35px;
        color: #FCFCFC;
        background: #09B816;
        margin: 0 auto;
        margin-top: 18px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

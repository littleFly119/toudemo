<template>
  <div class="my_container">
    <!--头部-->
    <div v-if="user" class="header login">
      <div class="top">
        <van-image
          round
          class="touxiang"
          :src="userInfo.photo"
        />
        <span class="name">{{userInfo.name}}</span>

        <a class="editbtn" @click="$router.push('/edit')" href="javascript:;"> 编辑资料</a>
      </div>
      <ul class="bottom">
        <li>
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </li>
        <li>
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </li>
        <li>
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </li>
        <li>
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </li>
      </ul>
    </div>
    <div v-else class="header no_login" @click="$router.push('/login')">
      <img class="touxiang" src="~@/assets/mobile.png" alt="">
      <span class="name">登录 / 注册</span>
    </div>
    <!--收藏和历史-->
    <van-grid class="grid_container" clickable :column-num="2">
      <van-grid-item text="收藏" to="/shouCang">
        <i slot="icon" class="tiaotiao_iconfont icon-shoucang"></i>
      </van-grid-item>
      <van-grid-item text="历史" to="/liShi">
        <i slot="icon" class="tiaotiao_iconfont icon-lishi"></i>
      </van-grid-item>
    </van-grid>
    <!--列表单元格-->
    <van-cell-group class="cell_container">
      <van-cell title="消息通知" is-link to="/messageNotice"/>
      <van-cell title="小智同学" is-link to="/littleZhi"/>
    </van-cell-group>
    <van-button v-if="user" @click="outLoginFn" class="outbtn" block>退出登录</van-button>
  </div>
</template>

<script>
import { getUserInfoAPI } from '@/api/user'
import { mapState } from 'vuex'

export default {
  name: 'myIndex',
  data () {
    return {
      userInfo: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async created () {
    if (this.user) {
      try {
        const res = await getUserInfoAPI()
        console.log(res)
        this.userInfo = res.data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    outLoginFn () {
      this.$dialog.confirm({
        title: '提示',
        message: '是否退出登录'
      })
        .then(() => {
          this.$store.commit('update_user', null)
        })
        .catch(() => {
          // on cancel
          this.$dialog.close()
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .my_container {
    .header {
      width: 750px;
      height: 401px;
      background-color: #3296fa;
      opacity: 0.7;
      background: url('~@/assets/banner.png') no-repeat;
      background-size: 100% 100%;
      .touxiang {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
        border: 2px solid #fff;
        border-radius: 50%;
      }
      .name {
        font-family: MicrosoftYaHei;
        font-size: 28px;
        letter-spacing: 1px;
        color: #ffffff;
      }
    }
    .no_login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
    .login {
      padding-top: 116px;
      box-sizing: border-box;
      .top {
        display: flex;
        align-items: center;
        padding-right: 33px;
        margin-bottom: 55px;
        .touxiang {
          margin-left: 32px;
          margin-right: 22px;
          margin-bottom: 0;
        }
        .name {
          flex: 1;
        }
        .editbtn {
          font-size: 20px;
          letter-spacing: 1px;
          color: #666666;
          width: 116px;
          height: 33px;
          background-color: #ffffff;
          border-radius: 16px;
          text-align: center;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-around;
        font-size: 36px;
        letter-spacing: 1px;
        color: #ffffff;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          .text {
            font-size: 23px;
          }
        }
      }

    }
    /deep/ .grid_container {
      padding: 22px 0 17px 0;
      margin-bottom: 9px;
      background-color: #fff;
      .tiaotiao_iconfont {
        font-size: 45px;
        color: #eb5253;
      }
      .van-grid-item__text {
        font-size: 28px;
        color: #333;
        letter-spacing: 4px;
      }
      .van-grid-item__content {
        padding-top: 6px;
        padding-bottom: 8px;
      }
      .van-grid-item__content::after {
        border-bottom-width: 0;
      }
    }
    .cell_container {
      margin-bottom: 9px;
      .van-cell {
        font-size: 30px;
        letter-spacing: 1px;
        color: #333333;
      }
    }
    .outbtn {
      font-family: MicrosoftYaHei;
      font-size: 30px;
      letter-spacing: 1px;
      color: #d86262;
    }
  }
</style>

<template>
  <div class="login-container">

    <van-nav-bar class="page-nav-bar" title="登录">
      <template #left>
        <i slot="left-icon" class="tiaotiao_iconfont icon-guanbi" @click="$router.back()"></i>
      </template>
    </van-nav-bar>
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        type="number"
        maxlength="11"
        placeholder="请输入手机号"
        :rules="userFormrules.mobile"
      >
        <i slot="left-icon" class="tiaotiao_iconfont icon-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        type="number"
        maxlength="6"
        :rules="userFormrules.code"
      >
        <i slot="left-icon" class="tiaotiao_iconfont icon-yanzhengma"></i>
        <template #button>
          <van-count-down
            @finish="isCountDownShow=false"
            v-if="isCountDownShow" :time="time" format="ss s"/>
          <van-button v-else
                      native-type="button"
                      @click="sendCodeFn"
                      class="send_sms_btn" round size="small" type="primary">获取验证码
          </van-button>
        </template>
      </van-field>
      <div class="submitbox">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI, sendCodeAPI } from '../../api/user.js'

export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      time: 10 * 1000,
      isCountDownShow: false,
      user: {
        mobile: '',
        code: ''
      },
      userFormrules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          }, {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          }, {
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    async onSubmit () {
      const user = this.user

      // 在组建中调用需要加this
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        console.log(user)
        const res = await loginAPI(user)
        this.$toast.success('登录成功')
        this.$store.commit('update_user', res.data.data)
        this.$router.back()
      } catch (res) {
        this.$toast.fail(res)
        console.log(res)
        // if (res.response.status === 400) {
        //   this.$toast.fail(res.response.data.message)
        // } else {
        //   this.$toast.fail(res)
        // }
      }
    },
    async sendCodeFn () {
      // alert("发送验证码")
      // 1.校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('手机号错误')
      }
      // 2.倒计时
      this.isCountDownShow = true
      // 3.调用接口发送验证码
      try {
        await sendCodeAPI(this.user.mobile)
      } catch (err) {
        if (err.response.status === 429) {
          this.$toast.fail('发送太频繁了')
        } else {
          this.$toast.fail(err)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    .tiaotiao_iconfont {
      font-size: 37px;
    }
    .icon-guanbi {
      color: #fff;
      font-size: 18px;
    }
    input {
      color: #c0c0c0;
    }
    .van-cell::after {
      width: 689px;
      height: 2px;
      background-color: #eeeeee;
      border-bottom: none;
    }
    .send_sms_btn {
      background-color: #ededed;
      border: none;
      width: 152px;
      height: 46px;
      .van-button__text {
        font-size: 22px;
        color: #666666;
        line-height: 46px;
      }
    }
    .submitbox {
      padding-top: 53px;
      margin: 0 28px;
      .van-button {
        background-color: #6db4fb;
        border-color: #6db4fb;
      }
    }

  }

</style>

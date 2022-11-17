<template>
  <div class="layout_container">
    <router-view/>
    <van-tabbar class="tabbar_container" route>
      <van-tabbar-item replace to="/home">
        <i slot="icon" class="tiaotiao_iconfont icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/wenda" icon="search">
        <i slot="icon" class="tiaotiao_iconfont icon-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="friends-o">
        <i slot="icon" class="tiaotiao_iconfont icon-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="setting-o">
        <i slot="icon" class="tiaotiao_iconfont icon-wode"></i>
        <span class="text">{{$store.state.user?'我的':'未登录'}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .layout_container {
    .tabbar_container .text {
      font-family: MicrosoftYaHei;
      font-size: 20px;
      letter-spacing: 1px;
      color: #666666;
    }
    i.tiaotiao_iconfont {
     font-size:40px;
    }
    .van-tabbar-item--active .text{
      color: #3296fa;
    }
  }

</style>

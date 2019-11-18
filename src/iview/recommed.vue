<template>
  <main role='main' class='main'>
    <Menu theme="dark"  accordion>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          内容管理
        </template>
        <MenuItem name="1-1"  to='/recommed/page1'>文章管理</MenuItem>
        <MenuItem name="1-2"  to='/recommed/page2'>评论管理</MenuItem>
        <MenuItem name="1-3"  to='/recommed/page3'>举报管理</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people" />
          用户管理
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
        <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
    
    <div class="view_box">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Recommed',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .main{
    display: flex;
    background: #ccc;
  }
  .view_box{
    flex: 1;
    background: #eee;
    padding:10px;
    overflow-y: scroll
  }
  .view_box::-webkit-scrollbar{
    display: none;
  }
  .ivu-menu, .ivu-menu-dark, .ivu-menu-vertical {
    background: #222 !important;
  }
</style>

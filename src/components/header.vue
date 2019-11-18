<template>
  <header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="0" to='/'>
      <Icon type="ios-paper" />
      内容管理
      </MenuItem>
      <MenuItem name="1" to='/recommed'>
      <Icon type="ios-paper" />
      内容管理
      </MenuItem>
      <MenuItem name="2" to='/search'>
      <Icon type="ios-people" />
      用户管理
      </MenuItem>
      <Submenu name="3" to='/about'>
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
      <MenuItem name="4" to='/other'>
      <Icon type="ios-construct" />
      综合设置
      </MenuItem>
    </Menu>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        theme1: 'dark'
      }
    }
  }
</script>

<style scoped>
  ul{
    background: rgb(29, 30, 35) !important;
  }
  ul>li{
        color: #f6ca9d !important;
  }
  li li{
    color: #666 !important;
  }
</style>

<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <el-container id="app">
    <el-header>
      <h1>PTE-Todos</h1>
    </el-header>
    <!-- header -->
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</template>

<style lang="less">
#app {
  max-width: 980px;
  margin: 0 auto;
}
</style>

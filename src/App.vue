<template>
  <div class="app">
    <div class="nav" v-if="this.$router.currentRoute.name != 'pedido'">
    </div>
    <router-view class="conteudo"></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css");
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700|Roboto");

//$color-yellow: #ffd740;
//$color-blue-light: #03a9f4;
//$color-blue-normal: #0288d1;
//$color-blue-strong: #0287cf;
//$height-header: 30px;
.app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
}
.nav {
  height: 30px;
  width: 100vw;
  background-color: #ffd740;
}

.conteudo{
  width: 100vw;
  background-color: #ebebeb;
}
</style>

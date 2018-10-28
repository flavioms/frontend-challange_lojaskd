<template>
  <nav class="topnav" >
    <div class="titulo-grupo">
      <h1 class="titulo">{{titulo}}</h1>
      <p class="subtitulo">{{subtitulo}}</p>
    </div>
    <Menu :links="links"></Menu>
  </nav>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  name: 'TopNav',
  components: {
    Menu,
  },
  props: ['titulo', 'subtitulo', 'links']  
}
</script>


<style lang="scss" scoped>
.topnav{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  text-align: left;
  padding: 20px;
  color: white;

  >.titulo-grupo{
      >.titulo{
          font-size: 1.2em;
          font-weight: 100;
      }
      >.subtitulo{
          font-family: 'Lato', sans-serif;
          color: rgba( 255, 255, 255, 0.6 );
      }
  }
}
</style>
